import { Injectable } from '@angular/core';
import {Database, getDatabase, onValue, ref} from "@angular/fire/database";
import {HttpClient} from "@angular/common/http";
import {concat, map, Observable, of, Subject} from "rxjs";
import {Episode} from "./episode";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl = 'https://leinalok.pythonanywhere.com';

  animList: any[] = [];
  episodes:Observable<Episode[]>

  constructor(private db:Database, private http: HttpClient) {
  }

  getEpisodes(id:any){
    this.episodes = this.http.get(`${this.baseUrl}/animations/${id}/episodes`).pipe(map(res=>{
      return res['episodes']
    }))
    return "success"
  }

  getAnimations(page_size:number, page:number){
    this.http.get(`${this.baseUrl}/animations?page_size=${page_size}&page_number=${page}`).subscribe(res=>{
      // @ts-ignore
      for (const anim of res.animations) {
        this.animList.push(anim)
      }
    })

  }

  saveAnimations(){
    const animation_data = require('../../assets/snapshot.json')
    const episodes_data = require('../../assets/snapshot (2).json')
    const animations = []

    for (const animKey in animation_data) {
      const old_animation = animation_data[animKey]
      const new_animation = {
        'title': old_animation.title,
        'thumb_url':old_animation.thumb_url,
        'video_url':old_animation.video_url,
        'n_episodes':parseInt(old_animation.ep_length),
      }
      const old_episodes = episodes_data[animKey].episodes
      const new_episodes = []
      for (const ep of old_episodes) {
        const new_ep = {
          'ep_title': ep.title,
          'ep_video_url': ep.ep_video_url
        }
        new_episodes.push(new_ep)
      }

      animations.push({"animation":new_animation, "episodes": new_episodes})

    }
    this.sendNewAnimToDB(animations).subscribe(res=>{
      console.log(res)
    })
  }
  sendNewAnimToDB(animations:any){
    return this.http.post(this.baseUrl+'animations',{"animations":animations})
  }
}
