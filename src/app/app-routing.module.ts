import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { TelevisionComponent } from './television/television.component';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'product', children:[
    {path:'',  component:ProductComponent},
    {path:'laptop',  component:LaptopComponent},
    {path:'mobile',  component:MobileComponent},
    {path:'television',  component:TelevisionComponent},
  ]},
  {path:'contact', component:ContactComponent},
  {path:'parent', component:ParentComponent},
  {path:'**' , component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
