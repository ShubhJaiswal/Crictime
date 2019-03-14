import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ScoreCardComponent } from './score-card/score-card.component';
import { GameReportComponent } from './game-report/game-report.component';
import { GameService } from './game.service';

const routes: Routes = [

  {path: 'scorecard', component: ScoreCardComponent},
  {path: 'report', component: GameReportComponent},

];

@NgModule({
  declarations: [
    ScoreCardComponent,
    GameReportComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    GameService
  ]
})
export class GameModule { }
