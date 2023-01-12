import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {WatchComponent} from "./components/watch/watch.component";
import {PlayVideoBlockComponent} from "./components/play-video-block/play-video-block.component";

const routes:Routes=[
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
