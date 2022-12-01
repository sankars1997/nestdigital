import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicecourseapiService {

  constructor(private http:HttpClient) { }
  fetchCourse=()=>
  {
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
  addCourses=(dataToSend:any)=>
  {
    return this.http.post("https://mylinkurcodesapp.herokuapp.com/addcourse",dataToSend)
  }
}
