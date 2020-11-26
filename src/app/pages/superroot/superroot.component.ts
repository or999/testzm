import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { identity } from 'rxjs';
declare const AMap: any;
declare const Loca: any;
declare const AMapUI: any;
declare const AMapLoader: any;

@Component({
  selector: 'app-superroot',
  templateUrl: './superroot.component.html',
  styleUrls: ['./superroot.component.css']
})
export class SuperrootComponent implements OnInit, AfterViewInit {

  constructor() { }
  citys: any;
  ngOnInit(): void {
    // this.creatMap();
  }
  ngAfterViewInit(): void {
    this.map();
  }

  creatMap(): void {
    const map = new AMap.Map('maplayer', {
      mapStyle: 'amap://styles/1de318cbb8d12c02303a22c550b9ccc9',
      zoom: 5,
      center: [107.4976, 32.1697]
    });
    const layer = new Loca.PointLayer({
      map
    });
    const data = [
      { name: '北京市', center: '116.407394,39.904211' },
      { name: '天津市', center: '117.200983,39.084158' },
      { name: '河北省', center: '114.530235,38.037433' },
      { name: '山西省', center: '112.562678,37.873499' }
    ];
    layer.setData(data, {
      type: 'json', // TODO:数据类型
      lnglat: 'center'//  TODO:指定坐标
    });
    layer.setOptions({
      style: {
        radius: 10,
        color: '#ffee00'// 可为回调函数
      }
    });
    layer.render();
    layer.show();
  }
  map() {
    // TODO:使用Amaploader加载高德地图
    AMapLoader.load({ // 首次调用 load
      key: '259d444fe2a92c30a37d89767439d230', // 首次load key为必填
      version: '1.4.15',
      Loca: {
        version: '1.3.2',
      },
      AMapUI: {
        version: '1.1',
        plugins: ['overlay/SimpleMarker']
      }
    }).then((AMap) => {
      const map = new AMap.Map('maplayer', {
        zoom: 5,
      });
      const marker = new AMapUI.SimpleMarker({
        iconLabel: '1',
        // 自定义图标地址
        iconStyle: '<div style="background:blue;width:20px;height:20px;border-radius: 50%;"></div>',
        // 设置基点偏移
        offset: new AMap.Pixel(-10, -20),
        map,
        showPositionPoint: true,
        position: ['113.777523', '34.745608'],
        zIndex: 100
      });
      const layer = new Loca.PointLayer({
        map,
      });
      const data = [
        { name: '北京市', center: '116.407394,39.904211' },
        { name: '天津市', center: '117.200983,39.084158' },
        { name: '河北省', center: '114.530235,38.037433' },
        { name: '山西省', center: '112.562678,37.873499' }
      ];
      layer.setData(data, {
        // 指定经纬度所在字段
        lnglat: 'center'
      });
      layer.setOptions({
        style: {
          // 圆形半径，单位像素
          radius: 15,
          // 填充颜色
          color: '#07E8E4',
          // 描边颜色
          borderColor: '#5DFBF9',
          // 描边宽度，单位像素
          borderWidth: 1,
          // 透明度 [0-1]
          opacity: 0.9,
        }
      });
      layer.render();
      map.on('click', (e) => {
        const jing = e.lnglat.getLng();
        const wei = e.lnglat.getLat();
        map.setCenter([jing, wei]);
        marker.setPosition([jing, wei]);
      });
    }).catch((e: any) => {
      console.log(e);
    });
  }
  Test(x): void {
    const a = identity<string>(x);
    const b = identity('string');
    console.log(a);
  }
}
