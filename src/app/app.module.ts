import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule,Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { FriendviewComponent } from './friendview/friendview.component';
import { InnerhomeComponent } from './innerhome/innerhome.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeregComponent } from './employeereg/employeereg.component';
import { FriendaddComponent } from './friendadd/friendadd.component';
import { Navbar3Component } from './navbar3/navbar3.component';
import { Innerhome2Component } from './innerhome2/innerhome2.component';
import { AddcourseComponent } from './addcourse/addcourse.component';

const myRoute:Routes =[
  {
path:"",
component:HomeComponent
  },
  {
    path:"contactus",
    component:ContactusComponent
  },
  {
  path:"aboutus",
  component:AboutusComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"adminlogin",
    component:AdminloginComponent
  },
  {
    path:"friendview",
    component:FriendviewComponent
  },
  {
    path:"innerhome",
    component:InnerhomeComponent
  },
  {
    path:"viewcourse",
    component:ViewcourseComponent

  },
  {
    path:"employeelogin",
    component:EmployeeloginComponent
  },
  {
    path:"employeereg",
    component:EmployeeregComponent
  },
  {
    path:"innerhome2",
    component:Innerhome2Component
  },
  {
    path:"friendadd",
    component:FriendaddComponent
  },
  {
    path:"addcourse",
    component:AddcourseComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    GalleryComponent,
    NavbarComponent,
    AdminloginComponent,
    FriendviewComponent,
    InnerhomeComponent,
    ViewcourseComponent,
    Navbar2Component,
    EmployeeloginComponent,
    EmployeeregComponent,
    FriendaddComponent,
    Navbar3Component,
    Innerhome2Component,
    AddcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(myRoute),HttpClientModule,FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
