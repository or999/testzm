import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import 'echarts-gl';
import { from, Observable, of, scheduled } from 'rxjs';
import { delay, skip, take } from 'rxjs/operators';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    constructor() { }
    condition = 1;
    ngOnInit(): void {
        // this.myObservable();
        this.test2();
        const myChart = echarts.init(document.getElementById('main'));
        const option = {
            title: {
                text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'test1',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'test2',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'test3',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'test4',
                    type: 'line',
                    stack: '总量',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'test5',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
        myChart.setOption(option);
    }
    // setStyle(): object {
    //     return {
    //         color: 'blue',
    //         fontSize: '40px'
    //     };
    // }
    myObservable(): void {
        function create(subscriber) {
            const observable = {
                subscribe(observer) {
                    subscriber(observer);

                }
            };
            return observable;
        }
        const observableTest = create(
            (observer) => { observer.next(1); observer.next(2); observer.complete(); }
        );
        const observer = {
            next: (value) => {
                console.log(value);
            },
            complete: () => {
                console.log('complete');

            }
        };
        observableTest.subscribe(observer);
    }
    test(): Observable<any> {
        return from([1, 2, 3]);
    }
    test3(): any {
        return {
            next: (value) => {
                console.log(value);
            },
            error: (error) => {
                console.log(error);
            },
            complete: () => {
                console.log('complete');
            }
        };
    }
    test2() {
        this.test().pipe(
            take(2),
            skip(1),
            delay(6000)
        ).subscribe(this.test3());
    }
}
