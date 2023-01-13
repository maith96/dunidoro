import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map, pipe, switchMap } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent {
  throttle = 1000
  distance = 2
  page_size = 20
  page =1
  q= ''
  dummy = this.route.paramMap.pipe(switchMap(params=>{
    this.q = params.get('query').split('=')[1]
    this.page = 1
    this.searchAnimList$=[]
    this.fetchSearchResult()
    return this.q

  })).subscribe()

  

  searchAnimList$=[]

  constructor(private api:ApiService, private route:ActivatedRoute){}
  ngOnInit(){
    
  }

  fetchSearchResult(){
    this.page ++

    this.api.searchAnim(this.q, (this.page_size), this.page-1).subscribe((res:any)=>{
      
      for(let anim of res.animations){
        this.searchAnimList$.push(anim)
      }
    })
     
  }
  onClick(){
    window.scrollTo({top:0, left:0, behavior:"smooth"})

    this.api.animList = []
    this.fetchSearchResult()
  }
  onScroll(){
    this.fetchSearchResult()

  }


}
