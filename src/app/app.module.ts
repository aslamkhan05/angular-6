import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContainerComponent } from './mycontainer/container/container.component';
import { TopnavComponent } from './mycontainer/topnav/topnav.component';
import { HeaderComponent } from './mycontainer/header/header.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './laptop/laptop.component';
import { TelevisionComponent } from './television/television.component';
import { MobileComponent } from './mobile/mobile.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import {CpipesPipe} from './cpipes.pipe'


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TopnavComponent,
    HeaderComponent,
    EventbindingComponent,
    DirectivesComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
    PagenotfoundComponent,
    LaptopComponent,
    TelevisionComponent,
    MobileComponent,
    ParentComponent,
    ChildComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    CpipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
