import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-select',
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.scss']
})
export class DateSelectComponent implements OnInit {

  constructor() { }
  @Output() date:EventEmitter<any> = new EventEmitter()
  startDate = new Date();
  endDate = null;
  ngOnInit(): void {
  }
  getValue(value): void {
      this.date.emit({startDate:this.startDate,endDate:this.endDate})
    // console.log(value);
  }
  getDay(num: number, str = '-'): string {
    const day = new Date();
    const nowTime = day.getTime();
    const ms = 24 * 3600 * 1000 * num;
    day.setTime(Math.floor(nowTime + ms));
    const oYear = day.getFullYear();
    let oMoth = (day.getMonth() + 1).toString();
    if (oMoth.length <= 1) { oMoth = '0' + oMoth; }
    let oDay = day.getDate().toString();
    if (oDay.length <= 1) { oDay = '0' + oDay; }
    return oYear + str + oMoth + str + oDay;
  }

  getNextWeekday(num: number, str = '-'): string {
    let day;
    if (this.startDate) {
       day = this.startDate;
    } else {
      day=this.endDate||new Date()
    }
    const nowTime = day.getTime();
    const ms = 24 * 3600 * 1000 * num;
    day.setTime(Math.floor(nowTime + ms));
    const oYear = day.getFullYear();
    let oMoth = (day.getMonth() + 1).toString();
    if (oMoth.length <= 1) { oMoth = '0' + oMoth; }
    let oDay = day.getDate().toString();
    if (oDay.length <= 1) { oDay = '0' + oDay; }
      return oYear + str + oMoth + str + oDay;
   
  }

}
