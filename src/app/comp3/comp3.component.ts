import { Component, OnInit } from '@angular/core';
import { DesignutilitiesService } from '../designutilities.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(private _data:DesignutilitiesService) {
    this._data.username.subscribe(names => this.username=names)
   }


  ngOnInit() {
  }
  username:string;
  onUpdate(uname){
    this._data.username.next(uname.value)
  }

}
