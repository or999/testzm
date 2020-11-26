import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, delay, catchError, retry, debounceTime } from 'rxjs/operators';
import { key, rootUrl } from './key';
@Injectable({
  providedIn: 'root'
})
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
