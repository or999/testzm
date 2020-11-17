import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogin: boolean;
  redirectUrl: string;
  constructor(private router: Router) { }
  setLogin(): Observable<boolean> {
    localStorage.setItem('isLogin', 'true');
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLogin = true)
    );
  }
  logOut(): void {
    this.isLogin = false;
    localStorage.removeItem('isLogin');
    this.router.navigateByUrl('login');
  }
}
