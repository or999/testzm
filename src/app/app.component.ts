import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  title = 'zm';
  constructor(public router: Router) { }
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // TODO:直接将跳转到pages页面后续可单独设立服务。检测是否有登录信息，有则跳转到pages，没有则跳转到登录页
    this.router.navigate(['pages']);
  }
}
