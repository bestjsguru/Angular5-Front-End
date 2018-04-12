import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private _signedIn: boolean;

  constructor() {
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
}
