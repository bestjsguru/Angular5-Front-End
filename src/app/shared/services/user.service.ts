import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {
  private _signedIn: boolean;
  private _environment = environment;
  
  constructor(
    private httpService: HttpService,
    private http: HttpClient
  ) {
    this._signedIn = localStorage.getItem('svh_auth_token') === 'true';
    console.log(123, this._signedIn);
  }

  get signedIn(): boolean {
    return this._signedIn;
  }

  set signedIn(val: boolean) {
    console.log(111, val);
    val ? localStorage.setItem('svh_auth_token', 'true') : localStorage.removeItem('svh_auth_token');
    this._signedIn = val;
  }

  login(email: string, password: string) {
    const body = {username: email, password: password};    
    return this.http.post(this._environment.apiUrl + '/login/auth', body).map(res => {
      console.log('res: ', res);
    });
  }
}
