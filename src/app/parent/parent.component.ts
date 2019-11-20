import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  productSelected:boolean=false;
  selectedProduct:string;
  notClick:any;
  


  onSelectProduct(product){
    this.productSelected=true;
    this.selectedProduct=product;
  }
  onAddedProduct(event){
    this.notClick=event;
  }

 
}
