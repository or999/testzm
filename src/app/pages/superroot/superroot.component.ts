import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { identity } from 'rxjs';
import { ModalService, DialogService } from 'ng-devui/modal';
import { StableComponent } from '../share-component/stable/stable.component';
declare const AMap: any;
declare const Loca: any;
declare const AMapUI: any;
declare const AMapLoader: any;

@Component({
  selector: 'app-superroot',
  templateUrl: './superroot.component.html',
  styleUrls: ['./superroot.component.scss']
})
export class SuperrootComponent implements OnInit, AfterViewInit {
  showTable = false;
  mapStyle = false;
  mapCopy: any;
  constructor(private dialogService: DialogService) { }
  ngOnInit(): void {
    // this.creatMap();
    this.map();
  }
  ngAfterViewInit(): void {
  }

  creatMap(): void {
    const map = new AMap.Map('maplayer', {
      mapStyle: 'amap://styles/1de318cbb8d12c02303a22c550b9ccc9',
      zoom: 5,
      center: [107.4976, 32.1697]
    });
    const layer = new Loca.PointLayer({
      map
    });
    const data = [
      { name: '北京市', center: '116.407394,39.904211' },
      { name: '天津市', center: '117.200983,39.084158' },
      { name: '河北省', center: '114.530235,38.037433' },
      { name: '山西省', center: '112.562678,37.873499' }
    ];
    layer.setData(data, {
      type: 'json', // TODO:数据类型
      lnglat: 'center'//  TODO:指定坐标
    });
    layer.setOptions({
      style: {
        radius: 10,
        color: '#ffee00'// 可为回调函数
      }
    });
    layer.render();
    layer.show();
  }
  toggle(): void {
    let styleName: string;
    if (this.mapStyle) {
      styleName = 'amap://styles/5c68fe2b796cca58d2d3ba70ca096a68';
      this.mapStyle = false;
    } else {
      styleName = 'amap://styles/8694a57a8a914b08093c06fb532b0089';
      this.mapStyle = true;
    }
    this.mapCopy.setMapStyle(styleName);
  }
  map(): void {
    // TODO:使用Amaploader加载高德地图
    AMapLoader.load({ // 首次调用 load
      key: '259d444fe2a92c30a37d89767439d230', // 首次load key为必填
      version: '1.4.15',
      // TODO:地图插件
      plugins: ['AMap.MouseTool', 'AMap.ElasticMarker', 'AMap.Map3D'],
      // TODO:数据可视化库
      Loca: {
        version: '1.3.2',
      },
      // TODO:地图组件库
      AMapUI: {
        version: '1.1',
        plugins: ['overlay/SimpleMarker']
      }
    }).then((AMap) => {
      // TODO: 创建地图
      const map = new AMap.Map('maplayer', {
        zoom: 5,
        mapStyle: this.mapStyle ? 'amap://styles/8694a57a8a914b08093c06fb532b0089' : 'amap://styles/5c68fe2b796cca58d2d3ba70ca096a68'
      });
      this.mapCopy = map;
      // TODO:创建标记点
      const marker = new AMapUI.SimpleMarker({
        iconLabel: '1',
        // 自定义图标地址
        iconStyle: '<div style="background:blue;width:20px;height:20px;border-radius: 50%;"></div>',
        // 设置基点偏移
        offset: new AMap.Pixel(-10, -20),
        map,
        showPositionPoint: true,
        position: ['113.777523', '34.745608'],
        zIndex: 100
      });
      // TODO: 自定义信息窗体
      const info = new AMap.InfoWindow({
        autoMove: false,
        content: '这是一个默认的信息窗体。',

      })
      // TODO: 自定义右键菜单
      const contextMenu = new AMap.ContextMenu();
      const mouseTool = new AMap.MouseTool(map);
      contextMenu.addItem('打开信息弹窗，关闭右键菜单', () => {
        mouseTool.close();
        contextMenu.close();
      }, 0);
      map.on('rightclick', (e) => {
        contextMenu.open(map, e.lnglat);
      });
      // TODO:可视化数据
      const layer = new Loca.IconLayer({
        map,
        eventSupport: true,
      });
      const data = [
        { name: '北京市', center: '116.407394,39.904211' },
        { name: '天津市', center: '117.200983,39.084158' },
        { name: '河北省', center: '114.530235,38.037433' },
        { name: '山西省', center: '112.562678,37.873499' }
      ];
      layer.setData(data, {
        // 指定经纬度所在字段
        lnglat: 'center'
      });
      layer.setOptions({
        // style: {
        //   // 圆形半径，单位像素
        //   radius: 15,
        //   // 填充颜色
        //   color: '#07E8E4',
        //   // 描边颜色
        //   borderColor: '#5DFBF9',
        //   // 描边宽度，单位像素
        //   borderWidth: 1,
        //   // 透明度 [0-1]
        //   opacity: 0.5,
        // }
        source: '/favicon.ico',  // base64 格式图片
        // 可以使用函数回调的形式
        // source: function(res) {
        //         var value = res.value;
        //         var typecode = value.typecode;
        //         var src = 'https://a.amap.com/Loca/static/manual/banks/'+ bankMap[typecode] + '.png';
        //        return src;
        //     },
        style: {
          // 默认半径单位为像素
          size: 50,
          opacity: 0.5,
        }
      });
      layer.render();
      layer.on('mousemove', (ev) => {
        // 当前元素的原始数据
        const rawData = ev.rawData;
        // 原始鼠标事件
        const originalEvent = ev.originalEvent;
        info.open(map, ev.lnglat);
      })
      map.on('click', (e) => {
        const jing = e.lnglat.getLng();
        const wei = e.lnglat.getLat();
        map.setCenter([jing, wei]);
        marker.setPosition([jing, wei]);
      });
    }).catch((e: any) => {
      console.log(e);
    });
  }

  Test(x): void {
    const a = identity<string>(x);
    const b = identity('string');
    console.log(a);
  }
  toShowtable(): void {
    this.showTable = !this.showTable;
  }
  openModal() {
    const results = this.dialogService.open({
      id: 'dialog-service',
      width: '500px',
      maxHeight: '500px',
      showAnimate: false,
      title: 'This is title',
      content: StableComponent,
      dialogtype: 'standard',
      backdropCloseable: true,
      bodyScrollable: true,
      buttons: [
        {
          cssClass: 'primary',
          text: '保存',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          }
        },
      ],
    });
  }
}
