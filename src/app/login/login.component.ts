import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingType } from 'ng-devui/loading';
import { delay } from 'rxjs/operators';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isAlphabetPattern = /^[a-zA-Z]+(\s+[a-zA-Z]+)*$/;
  formData = {
    userName: '',
    userPassword: '',
  };
  loading: LoadingType = undefined;
  constructor(private router: Router, private userService: UserService) {
  }
  ngOnInit(): void {
    // this.userService.getWeather().subscribe( (res) => { console.log((res as any).status); });
  }
  logIn(name, password): void {
    // TODO:订阅user服务里的可观察对象，
    // TODO:点击登录按钮，订阅user服务中返回的可观察对象，subscribe方法中传入回调函数
    this.loading =
      this.userService.setLogin(name, password).pipe(delay(9000)).subscribe(
        () => {
          if (this.userService.isLogin) {
            this.router.navigateByUrl(this.userService.redirectUrl);
            // console.log(this.userService.redirectUrl);
            this.loading = undefined;
          }
        });

  }
  submit(): void {
    console.log(this.formData);
    const { userName, userPassword } = this.formData;
    this.logIn(userName, userPassword);
  }
}
