import { Component } from '@angular/core';
import { ServicecourseapiService } from '../servicecourseapi.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {
  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""
  constructor(private api:ServicecourseapiService){}
  readValues=()=>
  {
    let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
    console.log(data)
    this.api.addCourses(data).subscribe(
      (response:any)=>
      {
        console.log(response);
        if (response.status=="success") {
          alert("Add Course successfully")
          this.courseTitle=""
          this.courseDescription=""
          this.courseDuration=""
          this.courseDate=""
          this.courseVenue=""
        } else {
          alert("Something went")
        }
      }
    )
  }
  data:any=[]
}

