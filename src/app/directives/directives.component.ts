import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    myProducts=[
      {name:'Tv', color:'black',price:'122200'},
      {name:'MObile', color:'green',price:'13200'},
      {name:'Washing', color:'brown',price:'142200'},
      {name:'Laptop', color:'blue',price:'14400'},
      {name:'Fridge', color:'red',price:'1200'},
    ];


    Users:any=[];

    

    onCreateUsers(uname){
      this.Users.push({
        name:uname.value
      });

      if(this.Users.length>3){
        this.router.navigate(['product'])
      };
    };
     
    onRemoveUsers(i){
      this.Users.splice(i,1)
    };

    
}
