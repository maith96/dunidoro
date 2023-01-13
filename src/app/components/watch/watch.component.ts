import {Component} from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {ActivatedRoute} from "@angular/router";
import { shareReplay, switchMap, tap} from "rxjs";
import { Meta, Title } from '@angular/platform-browser';

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
    this.htitle.setTitle(`Dunidoro - Watch ${this.title}`)
    this.meta.updateTag({name:'description', content:`Dunidoro - Watch ${this.title} Animation, toon, cartoon For Free. Popeye, BettyBoop, Superman and more`})

    return this.api.episodes
  }), shareReplay(1))

  episode_index = 0
  constructor(private api:ApiService, private route:ActivatedRoute, private htitle:Title, private meta:Meta) { }

  ngOnInit(){
    this.htitle.setTitle(`Dunidoro - Watch`)

  }

  episodeClick(index){
    this.episode_index = index
    window.scrollTo({top:0, left:0, behavior:"smooth"})
  }
}
