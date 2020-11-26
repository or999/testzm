import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './core/user/user.service';
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  title = 'zm';
  state: RouterStateSnapshot;
  constructor(public router: Router, private uerService: UserService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // TODO:直接将跳转到pages页面,后续可单独设立服务。检测是否有登录信息，有则跳转到pages，没有则跳转到登录页
    this.uerService.redirectUrl = location.pathname === '/' || 'login' ? 'pages' : location.pathname;
    this.router.navigateByUrl(this.uerService.redirectUrl);

  }




}
