import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormserviceService } from '../formservice.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  constructor(private _formservice:FormserviceService){}

   topics=[ 'angular', 'javascript', 'react'];


   userModel= new User('', '', 6, '', '');


  onSubmit(){

    this._formservice.enroll(this.userModel).subscribe(
      data => console.log('success', data), error => console.log('error', error)
    )

    

  }
}

  
  

