import { Component } from '@angular/core';
import { ServiceapifriendService } from '../serviceapifriend.service';

@Component({
  selector: 'app-friendview',
  templateUrl: './friendview.component.html',
  styleUrls: ['./friendview.component.css']
})
export class FriendviewComponent {

  
constructor(private api:ServiceapifriendService){
  api.fetchFriend().subscribe(
    ( response)=>{
      this.data=response;
    }
  )
}
  data:any =[]
}
