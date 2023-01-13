import {Component, HostListener} from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-anim-list',
  templateUrl: './anim-list.component.html',
  styleUrls: ['./anim-list.component.css']
})
export class AnimListComponent {
  throttle = 1000
  distance = 2
  page = 1
  page_size = 4

  animations:any = []
  windowWidth = window.innerWidth
  onWatchUrl = false

  constructor(private api:ApiService, private route:ActivatedRoute) {
    this.animations =  this.api.animList
  }
  ngOnInit(){
    this.onWatchUrl = this.route.snapshot.params['title']
    this.updatePageSize()
    this.getAnimations()
    this.page ++

    
  }

  onScroll(){
    this.getAnimations()

    this.page ++
  }

  getAnimations() {
    this.api.getAnimations(this.page_size, this.page)
    this.animations = this.api.animList
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.updatePageSize()
  }
  updatePageSize(){
    const size = window.innerWidth
    const animsLength = this.animations.length

    if(size > 1023){
      this.page_size = 16
    }
    else if(size > 764){
      this.page_size = 15
    }
    else if(size > 639){
      this.page_size = 8
    }
    else {
      this.page_size = 6
    }
  }

  onClick(){
    window.scrollTo({top:0, left:0, behavior:"smooth"})

    this.api.animList = []
    this.getAnimations()
  }
}


