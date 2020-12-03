import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { UserService } from '../core/user/user.service';
import { menu, IMenuType } from './pages-menu';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  logoSrc = 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg';
  constructor(private userService: UserService) { }
  msgs: Array<object> = [];
  menu: IMenuType[] = menu;
  menu2: IMenuType[];
  key = {
    activeKey: 'active',
  };
  // splitter input
  orientation = 'horizontal';
  splitBarSize = '2px';
  disabledBarSize = '1px';

  // splitter pane input
  size = '10%';
  minSize = '20%';
  maxSize = '60%';
  collapsed = false;
  isPaneShrink = false; // 默认不收缩
  hoverCard: Array<any> = [];
  showCard = false;
  ngOnInit(): void {
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
  }
  itemClick(event): void {
    // console.log(event);
    const selectedItem = event.item;
    this.menu.forEach((item) => {
      if (item === selectedItem || item.children ?.some(
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
    // this.menu.forEach((item) => {
    //   if (item === selectedItem) {
    //     item.active = true;
    //     console.log(this.menu);
    //   } else {
    //     item.active = false;
    //     if (item.children) {
    //       item.children.forEach((child) => {
    //         child.active = false;
    //       });
    //     }
    //   }
    // });
    this.collapsedChange(false);
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
}
