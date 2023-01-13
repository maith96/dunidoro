import {Component, HostListener} from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {ActivatedRoute} from "@angular/router";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

  constructor(private api:ApiService, private route:ActivatedRoute, private title:Title, private meta:Meta) {
  }
  ngOnInit(){
    this.title.setTitle('Dunidoro - Home')
    this.meta.updateTag({name:'description', content:'Dunidoro - Watch Classic Animations and Car Toons like Popeye, BettyBoop, Superman, Felix The Cat, Bimbo, and more for Free'})
  }

 
}
