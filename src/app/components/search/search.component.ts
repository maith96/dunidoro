import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() showSearchInput


  pattern = /^[a-zA-Z0-9_]+$/;
  constructor(private api:ApiService, private route:Router){}

  search(str){
    const isValid = this.pattern.test(str)
    this.route.navigate([`search?q=${str}`])

  }

}
