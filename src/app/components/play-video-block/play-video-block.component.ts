import {Component, Input} from '@angular/core';
import {distinctUntilChanged, map, shareReplay, switchMap, take, tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../shared/api.service";
import {data} from "autoprefixer";

@Component({
  selector: 'app-play-video-block',
  templateUrl: './play-video-block.component.html',
  styleUrls: ['./play-video-block.component.css']
})
export class PlayVideoBlockComponent {
@Input() episodes:any

  animTitle:any
  episode_index$ :any
  episodes$:any


  constructor(private route: ActivatedRoute, private api:ApiService) {

  }
  ngOnInit(){
    this.episode_index$=this.route.paramMap.pipe(switchMap(params=>{
        this.animTitle = params.get('title')
        return  params.get('episode').split('#')[1]
      }),
      map(res=>(parseInt(res)) - 1),
      shareReplay(1),
      distinctUntilChanged(),
      tap(res=>console.log(res)))

    console.log(this.episodes)


  }

}
