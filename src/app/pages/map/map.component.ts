import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MapService } from 'src/app/core/amap/map.service';
declare const AMap: any;
declare const AMapUI: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
//   jing = 113.777523;
//   wei = 34.745608;
//   @ViewChild('map') map: 'map';
//   constructor(private mapService: MapService) { }
  ngOnInit(): void {
    // this.drawMap();
  }
//   drawMap(): void {
// // TODO:原始方式加载高德地图（不推荐）
//     const map = new AMap.Map('container', {
//       zooms: [4, 18], // 设置地图级别范围
//       zoom: 18,
//       viewMode: '3D', // 使用3D视图
//       // center: [113.777523, 34.745608],
//       center: [this.jing, this.wei]
//       // layers: [// 使用多个图层
//       //   new AMap.TileLayer.Satellite(),
//       //   new AMap.TileLayer.RoadNet()
//       // ],
//     });
//     const marker = new AMap.Marker({
//       map,
//       position: [this.jing, this.wei],
//       label: {
//         offset: new AMap.Pixel(20, 20),
//         // 修改label相对于maker的位置
//         content: '点击Marker打开高德地图'
//       }
//     });
//     marker.on('click', () => {
//       marker.markOnAMAP({
//         name: 'test',
//         position: marker.getPosition()
//       });
//     });
//     const contextMenu = new AMap.ContextMenu(
//       { isCustom: true }
//     );
//     contextMenu.addItem('<div>test</div>', () => { this.test(); }, 0);
//     marker.on('rightclick', (e) => {
//       contextMenu.open(map, e.lnglat);
//     });
//     map.on('click', (e) => {
//       this.jing = e.lnglat.getLng();
//       this.wei = e.lnglat.getLat();
//       map.setCenter([this.jing, this.wei]);
//       marker.setPosition([this.jing, this.wei]);
//     });
//     AMapUI.loadUI([
//       // 'overlay/SimpleMarker', // SimpleMarker
//       'overlay/SimpleInfoWindow', // SimpleInfoWindow
//     ],
//       function(SimpleInfoWindow) {
//         const infoWindow = new SimpleInfoWindow({
//           infoTitle: '<strong>这里是标题</strong>',
//           infoBody: '<p>这里是内容。</p>'
//         });
//         infoWindow.open(map, map.getCenter());
//       });
//   }
//   test(): void {
//     console.log('test');
//     console.log(this.jing);
//   }

}
