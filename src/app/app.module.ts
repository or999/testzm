import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevUIModule } from 'ng-devui';
// import { MaterialModule } from './material/material.module';

import { CoreModule } from './core/core.module';
import { LoginComponent } from './login/login.component';
// TODO:import { httpInterceptorProviders } from './http-interceptors';
@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   // MaterialModule,
    CoreModule,
    AppRoutingModule,
    DevUIModule,
  ],
  providers: [
    // TODO:httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
