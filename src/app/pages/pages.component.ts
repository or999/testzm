import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { MapService } from '../core/amap/map.service';
import { UserService } from '../core/user/user.service';
import { menu, IMenuType } from './pages-menu';
import { IFileOptions, IUploadOptions } from 'ng-devui/upload';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  logoSrc = 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg';
  imgSrc: string;
  imageInput: any;
  constructor(private userService: UserService, private router: Router, private mapService: MapService) { }
  msgs: Array<object> = [];
  menu: IMenuType[];
  key = {
    activeKey: 'active',
  };
  // splitter input
  orientation = 'horizontal';
  splitBarSize = '2px';
  disabledBarSize = '1px';

  // splitter pane input
  size = '10%';
  minSize = '8%';
  maxSize = '20%';
  collapsed = false;
  isPaneShrink = false; // 默认不收缩
  hoverCard: Array<any> = [];
  showCard = false;
  ngOnInit(): void {
    // TODO:判断用户权限，通过用户权限生成不同菜单。
    const name = this.userService.user?.name || JSON.parse(localStorage.getItem('user')).name;
    if (name !== 'root') {
      this.menu = menu;
      this.menu.pop();
    } else {
      this.menu = menu;
    }
    this.menu.forEach((item) => {
      if (item.children) {
        let childTitle = `<span>${item.title}</span>`;
        item.children.forEach((child) => {
          childTitle += `<li>${child.title}</li>`;
        });
        this.hoverCard.push(childTitle);
      } else {
        this.hoverCard.push(item.title);
      }
    });
    // this.mapService.getWeather().subscribe((data) => {
    //   console.log(data);
    // }, (error) => {
    //     console.log('error');
    // });
  }

  itemClick(event): void {
    // console.log(event);
    const selectedItem = event.item;
    this.menu.forEach((item) => {
      if (item === selectedItem || item.children?.some(
        (child) => {
          return child === selectedItem;
        })) {
        item.active = true;
        // console.log(this.menu);
      } else {
        item.active = false;
      }
    });
  }
  sizeChange(size: any): void {
    //  console.log(size);
  }
  collapsedChange(event: boolean): void {
    //  console.log(event);
    this.collapsed = event;
  }
  selectItem(selectedItem: IMenuType): void {
    if (selectedItem.children) {
      this.collapsedChange(false);
    } else {
      this.menu.forEach((item) => {
        if (item === selectedItem) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
      this.router.navigate(['/pages', selectedItem.link]);
    }
  }
  paneShrinkStatus(status: boolean): void {
    this.isPaneShrink = status;
  }
  isChildrenActive(item: { children?: any[]; }): boolean {
    const isActive = item.children && item.children.some((child: { active: boolean; }) => child.active);
    return isActive;
  }
  logOut(): void {
    this.userService.logOut();
    this.msgs = [{ severity: 'success', summary: 'success', detail: '退出登录成功' }];
  }
  getFile(event,dtoggle) {
   console.log(event);
    this.imgSrc = this.logoSrc
    // console.log(event.files);
    console.log(this.imageInput);
  //  console.log(this.imgSrc);
    dtoggle.toggle()
 }
}
