import { Component, OnInit } from '@angular/core';
import { menu, IMenuType } from './pages-menu';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  logoSrc = 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg';
  constructor() { }
  menu: IMenuType[] = menu;
  activeItem: string;
  activeBread: string;

  // splitter input
  orientation = 'horizontal';
  splitBarSize = '2px';
  disabledBarSize = '1px';

  // splitter pane input
  size = '10%';
  minSize = '20%';
  maxSize = '60%';
  collapsed = false;
  isPaneShrink = false;
  hoverCard: Array<any> = [];
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
  itemClick(event: { item: { title: string; }; parent: { title: string; }; }): void {
    // console.log(event);
    this.activeItem = event.item.title;
    this.activeBread = event.parent.title;
  }

  sizeChange(size: any): void {
    console.log(size);
  }

  collapsedChange(event: boolean): void {
    console.log(event);
    this.collapsed = event;
  }

  selectItem(selectedItem: IMenuType): void {
    this.menu.forEach((item) => {
      if (item === selectedItem) {
        item.active = true;
      } else {
        item.active = false;
        if (item.children) {
          item.children.forEach((child) => {
            child.active = false;
          });
        }
      }
    });
    this.collapsedChange(false);
  }

  paneShrinkStatus(status: boolean): void {
    this.isPaneShrink = status;
  }

  isChildrenActive(item: { children: any[]; }): boolean {
    const isActive = item.children && item.children.some((child: { active: any; }) => child.active);
    return isActive;
  }
}
