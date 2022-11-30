import { Component } from '@angular/core';
import { ServicecourseapiService } from '../servicecourseapi.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent {

  constructor(private api:ServicecourseapiService){
    api.fetchCourse().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }
  data:any=[]

}
