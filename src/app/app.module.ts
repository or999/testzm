import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevUIModule } from 'ng-devui';

import { CoreModule } from './core/core.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// TODO:import { httpInterceptorProviders } from './http-interceptors';
@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    DevUIModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // TODO:httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
