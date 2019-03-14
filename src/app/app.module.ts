import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameModule } from './common/game-module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { ScoreComponent } from './score/score.component';
import { NewsComponent } from './news/news.component';
import { BlogsComponent } from './blogs/blogs.component';


const routes: Routes = [
  {path: '', redirectTo: '/score', pathMatch: 'full'},
  {path: 'score', component: ScoreComponent},
  {path: 'news', component: NewsComponent},
  {path: 'blogs', component: BlogsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScoreComponent,
    NewsComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    GameModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
