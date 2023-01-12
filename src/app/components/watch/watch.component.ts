import {Component, NgIterable} from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {ActivatedRoute} from "@angular/router";
import {Animation} from "../../shared/animation";
import {Episode} from "../../shared/episode";
import {distinctUntilChanged, map, shareReplay, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent {
  title = ''
  episodes$ = this.route.paramMap.pipe(switchMap(params=>{
    this.api.getEpisodes(params.get('id'))
    this.title = params.get('title')
    return this.api.episodes
  }), shareReplay(1))

  episode_index = 0
  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(){

  }

  episodeClick(index){
    this.episode_index = index
    window.scrollTo({top:0, left:0, behavior:"smooth"})
  }
}
