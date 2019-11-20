import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilitiesService {

  constructor(private http:HttpClient) { }


  product():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  //username= new Subject<any>();

  username= new BehaviorSubject<any>('aaak');
}
