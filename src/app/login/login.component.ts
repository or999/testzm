import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoadingType } from 'ng-devui/loading';
import { delay } from 'rxjs/operators';
import { MapService } from '../core/amap/map.service';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // providers: [MapService]
})
export class LoginComponent implements OnInit {
  isAlphabetPattern = /^[a-zA-Z]+(\s+[a-zA-Z]+)*$/;
  formData = {
    userName: '',
    userPassword: '',
  };
  loading: LoadingType = undefined;
  constructor(private router: Router, private userService: UserService, private mapService: MapService) {
  }
  ngOnInit(): void {
    this.mapService.getWeather().subscribe((res) => { console.log(res); });
  }
  logIn(name, password): void {
    // TODO:订阅user服务里的可观察对象，
    // TODO:点击登录按钮，订阅user服务中返回的可观察对象，subscribe方法中传入回调函数
    this.loading =
      this.userService.setLogin(name, password).pipe(delay(1000)).subscribe(
        () => {
          if (this.userService.isLogin) {
            this.router.navigate([this.userService.redirectUrl]).then(() => {

            });
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
