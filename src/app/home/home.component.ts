import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   
  
  constructor() { }

  ngOnInit() {
  }

  products=[
    {sno:1, name: 'samsung', price: 5000, availabilty:'available'},
    {sno:2, name: 'samsung Mobile', price: 5000, availabilty:'available'},
    {sno:3, name: 'Onida Tv', price: 5000, availabilty:'available'},
    {sno:4, name: 'videocon tv', price: 5000, availabilty:'available'},
    {sno:5, name: 'washing machine', price: 5000, availabilty:'available'},
    {sno:6, name: 'redmi phone', price: 5000, availabilty:'available'},
    {sno:7, name: 'iphone 11', price: 5000, availabilty:'available'},
    {sno:8, name: 'ton washing', price: 5000, availabilty:'available'},
    {sno:9, name: 'water bottle', price: 5000, availabilty:'available'},
    {sno:10, name: 'beard bottle', price: 5000, availabilty:'available'},
    {sno:11, name: 'hair oil', price: 5000, availabilty:'available'},
    {sno:12, name: 'beard oil', price: 5000, availabilty:'available'},
  ];

  proname:string="";
  

  
  

}
