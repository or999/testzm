import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevUIModule } from 'ng-devui';

import { CoreModule } from './core/core.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { PrintTableComponent } from './print-table/print-table.component';
// TODO:import { httpInterceptorProviders } from './http-interceptors';
@NgModule({
  declarations: [
    AppComponent, LoginComponent, PrintTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    DevUIModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    // TODO:httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
