import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {environment} from "../environments/environment";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {getDatabase, provideDatabase} from "@angular/fire/database";
import {MatCardModule} from "@angular/material/card";
import { HeaderComponent } from './components/header/header.component';
import { WatchComponent } from './components/watch/watch.component';
import { VideoBlockComponent } from './components/video-block/video-block.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { PlayVideoBlockComponent } from './components/play-video-block/play-video-block.component';
import {MatCommonModule} from "@angular/material/core";
import { PostAnimationComponent } from './components/post-animation/post-animation.component';
import { AboutComponent } from './components/about/about.component';
import { SupportUsComponent } from './components/support-us/support-us.component';
import { SearchComponent } from './components/search/search.component';
import { AnimListComponent } from './components/anim-list/anim-list.component';
import { SearchListComponent } from './components/search-list/search-list.component';

//angular/fire


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    WatchComponent,
    VideoBlockComponent,
    PlayVideoBlockComponent,
    PostAnimationComponent,
    AboutComponent,
    SupportUsComponent,
    SearchComponent,
    AnimListComponent,
    SearchListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCommonModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
