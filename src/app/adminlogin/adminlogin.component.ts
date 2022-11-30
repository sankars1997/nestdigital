import { Component } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
username=""
password=""

constructor(private route:Router){}
adminlogin=()=>
{
  let data:any=[{"username":this.username,"password":this.password}]
  console.log(data)
  
  if (this.username=="admin"  && this.password=="123") {
    this.route.navigate(['friendview'])
  } else {
    alert("invalid login")
  }
}
}
