import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MapService } from 'src/app/core/amap/map.service';
declare var AMap: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  jing = 113.777523;
  wei = 34.745608;
  constructor(private mapService: MapService) { }
  ngOnInit(): void {
    this.drawMap();
  }
  drawMap(): void {

    const map = new AMap.Map('container', {
      zooms: [4, 18], // 设置地图级别范围
      zoom: 18,
      viewMode: '3D', // 使用3D视图
      // center: [113.777523, 34.745608],
      center: [this.jing, this.wei]
      // layers: [// 使用多个图层
      //   new AMap.TileLayer.Satellite(),
      //   new AMap.TileLayer.RoadNet()
      // ],
    });
    const marker = new AMap.Marker({
      map,
      position: [this.jing, this.wei],
      label: {
        offset: new AMap.Pixel(20, 20),
        // 修改label相对于maker的位置
        content: '点击Marker打开高德地图'
      }
    });
    marker.on('click', () => {
      marker.markOnAMAP({
        name: 'test',
        position: marker.getPosition()
      });
    });
    map.on('click', (e) => {
      this.jing = e.lnglat.getLng();
      this.wei = e.lnglat.getLat();
      map.setCenter([this.jing, this.wei]);
      marker.setPosition([this.jing, this.wei]);
    });
  }

}
