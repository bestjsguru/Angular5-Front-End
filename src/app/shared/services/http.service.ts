import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  public get(url: any, params: any = null, headers?: any): Observable<any> {
    return this.http.get(url, { params, headers });
  }

  public post(url: any, data: any = null, options?: any): Observable<any> {
    return this.http.post(url, data, options);
  }

  public put(url: any, data: any = null, options?: any): Observable<any> {
    return this.http.put(url, data, options);
  }

  public delete(url: any, params: any = null, headers?: any): Observable<any> {
    return this.http.delete(url, { params, headers });
  }
}
