import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceapifriendService {

  
  constructor(private http:HttpClient) { }
fetchFriend=()=>
{
  return this.http.get("https://dummyapifriends.herokuapp.com/view")
}
addFriend=(dataToSend:any)=>
{
  return this.http.post("https://dummyapifriends.herokuapp.com/adddata",dataToSend)
}
}
