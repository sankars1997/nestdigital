import { Component } from '@angular/core';
import { ServiceapifriendService } from '../serviceapifriend.service';

@Component({
  selector: 'app-friendadd',
  templateUrl: './friendadd.component.html',
  styleUrls: ['./friendadd.component.css']
})
export class FriendaddComponent {
  name=""
  friendName=""
  DescribeYourFriend=""
  friendNickName=""

  constructor(private api:ServiceapifriendService){}
  readValues=()=>
  {
  let data:any={"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
 console.log(data)
 this.api.addFriend(data).subscribe(
  (response)=>{
console.log(response)
  }
 )
 
}
}
