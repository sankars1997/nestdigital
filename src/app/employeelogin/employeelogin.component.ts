import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent {
  username=""
password=""
constructor(private route:Router){}
employeelogin=()=>
{
  let data:any=[{"username":this.username,"password":this.password}]
  console.log(data)
  if (this.username=="admin"  && this.password=="123") {
    this.route.navigate(['innerhome'])
  } else {
    alert("invalid login")
  }
}
}
