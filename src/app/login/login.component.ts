import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAlphabetPattern = /^[a-zA-Z]+(\s+[a-zA-Z]+)*$/;
  formData = {
    userName: '',
    userPassword: '',
  };
  constructor(private router: Router, private userService: UserService) {
  }
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
  submit(): void {
    console.log(this.formData);
    this.logIn();
  }
}
