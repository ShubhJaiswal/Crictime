import { Component, OnInit } from '@angular/core';
import { GameService } from '../../common/game.service';
@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {

  myData: any[];

  constructor(private gamesrv: GameService ) { }

  ngOnInit() {
    this.getCricketScores();
  }

  getCricketScores() {
    this.gamesrv.getCricketScores().subscribe( (data) => {
      if (typeof data !== undefined) {
        this.myData = data.data;
      }
    });
  }

}
