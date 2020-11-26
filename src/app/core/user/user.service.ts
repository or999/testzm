import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { tap, delay, catchError, retry, debounceTime } from 'rxjs/operators';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  isLogin: boolean;
  redirectUrl: string;
  constructor(private router: Router, private http: HttpClient) { }
  // TODO:返回一个可观察对象
  setLogin(name: string, password: string): Observable<boolean> {
    this.user = { name, password, power: name === 'root' ? 1 : 0 } || JSON.parse(localStorage.getItem('user'));
    localStorage.setItem('isLogin', 'true');
    localStorage.setItem('user', JSON.stringify(this.user));
    return of(true).pipe(
      delay(1000),
      tap(() => this.isLogin = true)
    );
  }
  logOut(): void {
    this.isLogin = false;
    localStorage.removeItem('isLogin');
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }
  isRoot(): boolean {
    const user = this.user || JSON.parse(localStorage.getItem('user'));
    if (user) {
      return Boolean(user.power);
    }
  }
}
