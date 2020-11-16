// TODO: 该模块 用来存放数量庞大、辅助性的、只用一次的类和
// (应用级、只用一次的组件?)
// TODO:要共享给整个应用的单例服务(全应用级单例)放进 CoreModule 中
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { SkipSelf } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
