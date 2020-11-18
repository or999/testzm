import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }
  logIn(): void {
    // TODO:订阅user服务里的可观察对象，
    // TODO:点击登录按钮，订阅user服务中返回的可观察对象，subscribe方法中传入回调函数
    this.userService.setLogin().subscribe(() => {
      if (this.userService.isLogin) {
        this.router.navigateByUrl(this.userService.redirectUrl);
        // console.log(this.userService.redirectUrl);
      }
    });
  }
}
