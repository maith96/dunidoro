import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-post-animation',
  templateUrl: './post-animation.component.html',
  styleUrls: ['./post-animation.component.css']
})
export class PostAnimationComponent {
  constructor(private apiService:ApiService){}

  upload(){
    // this.apiService.saveAnimations()
  }

}
