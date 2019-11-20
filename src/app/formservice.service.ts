import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  constructor(public _http:HttpClient) { }

  _url:"";

  enroll(user:User){
    return this._http.post<any>(this._url, user);
  }
}
