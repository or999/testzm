import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { observable, Observable, of, throwError } from 'rxjs';
import { tap, delay, catchError, retry, debounceTime } from 'rxjs/operators';
import { key, rootUrl } from './key';
@Injectable({
  providedIn: 'any'
})
// TODO:限制服务使用范围方法一
// 删掉{
//   providedIn: 'root'
// }
//  在要使用该服务的模块 加入 providers: [MapService]
// TODO: providedIn: CoreModule 限制服务使用范围，只有导入core模块的模块及其子模块才能使用 该服务。
  //   providedIn: 'any' 在所有急性加载模块共用同一个服务实例，在每个惰性加载新的服务实例
export class MapService {
  constructor(private http: HttpClient) { }
  getMap(): Observable<any> {
    return this.http.get(
      rootUrl + 'staticmap?location=116.481485,39.990464&zoom=10&size=800*800&markers=mid,,A:116.481485,39.990464&key=' + key
    );
  }
  // TODO:天气数据api
  // TODO:高德地图testkey: ebe93f49afd42bd656ba514238a2af07
  getWeather(): Observable<object> {
    return this.http.get(
      rootUrl + 'weather/weatherInfo?city=110101&extensions=base&key=' + key,
    ).pipe(
      tap((res) => console.log(res)),
      // delay(1000),
      // debounceTime(50000)
    );
  }
}
