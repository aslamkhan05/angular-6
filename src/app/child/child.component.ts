import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  @Input() selectedProduct:string;
  @Input() productSelected:boolean=false;
  @Output() notClick = new EventEmitter();

  onaddToCart(){
    this.notClick.emit(this.selectedProduct);
    

  }

}
