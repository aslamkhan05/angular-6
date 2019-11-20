import { Component, OnInit } from '@angular/core';
import { DesignutilitiesService } from '../designutilities.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

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
