import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {WatchComponent} from "./components/watch/watch.component";
import {PlayVideoBlockComponent} from "./components/play-video-block/play-video-block.component";
import { PostAnimationComponent } from './components/post-animation/post-animation.component';
import { SupportUsComponent } from './components/support-us/support-us.component';
import { AboutComponent } from './components/about/about.component';
import { SearchListComponent } from './components/search-list/search-list.component';

const routes:Routes=[
  {path:"post-animation", component:PostAnimationComponent},
  {path:"support-us", component:SupportUsComponent},
  {path:"about", component:AboutComponent},
  {path:":query", component:SearchListComponent},
  {path:"watch/:id/:title", component:WatchComponent, children:[
    {path:":episode", component:PlayVideoBlockComponent},
    {path:"", component:WatchComponent}
    ]
  },
  {path:"", component:HomeComponent, pathMatch:"full"},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
