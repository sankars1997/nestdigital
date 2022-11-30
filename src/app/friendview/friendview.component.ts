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
  data2:any=[
    {
      "image1":"https://liveapps.nestdigital.com/intranest/assets/images/slider_new_2/banner_light.png",
      "image2":"https://liveapps.nestdigital.com/intranest/assets/images/slider_new_2/5.jpg",
      "image3":"https://liveapps.nestdigital.com/intranest/assets/images/slider_new_2/1.jpg"
    }]
}
