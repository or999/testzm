import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevUIModule, ICON_CONTRACT } from 'ng-devui';

// import { MaterialModule } from './material/material.module';

import { FirstModule } from './first/first.module';
import { CoreModule } from './core/core.module';
// TODO:import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   // MaterialModule,
    FirstModule,
    CoreModule,
    AppRoutingModule,
    DevUIModule
  ],
  providers: [
    // TODO:httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
