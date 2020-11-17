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
    this.userService.setLogin().subscribe(() => {
      if (this.userService.isLogin) {
        this.router.navigateByUrl(this.userService.redirectUrl);
        // console.log(this.userService.redirectUrl);
      }
    });
  }
}
