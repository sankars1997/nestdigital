import { Component } from '@angular/core';

@Component({
  selector: 'app-employeereg',
  templateUrl: './employeereg.component.html',
  styleUrls: ['./employeereg.component.css']
})
export class EmployeeregComponent {
  empId=""
  firstName=""
  lastName=""
  houseNo=""
  houseName=""
  streetName=""
  pincode=""
  district=""
  state=""
  country=""
  mobNo=""
  emailId=""
  parentName=""
  gender=""
  highestDegree=""
  yearOfExperience=""
  doj=""
  userName=""
  password=""
  confirmPassword=""
  readValues=()=>
  {
    let data:any={"empId":this.empId,"firstName":this.firstName,"lastName":this.lastName,"houseNo":this.houseNo,"houseName":this.houseName,"streetName":this.streetName,"pincode":this.pincode,"district":this.district,
  "state":this.state,"country":this.country,"mobNo":this.mobNo,"emailId":this.emailId,"parentName":this.parentName,"gender":this.gender,
"highestDegree":this.highestDegree,"yearOfExperience":this.yearOfExperience,"doj":this.doj,"userName":this.userName,"password":this.password,"confirmPassword":this.confirmPassword}
if (this.password==this.confirmPassword) {
  alert("Registered successfully")
  console.log(data)
  
} else {
  alert("Password and confirm password must be same")
}
  }
}
