import { Component } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
username=""
password=""

adminlogin=()=>
{
  let data:any=[{"username":this.username,"password":this.password}]
  console.log(data)
  
  if (this.username=="admin"  && this.password=="123") {
    alert("validlogin")
  } else {
    alert("invalid login")
  }
}
}
