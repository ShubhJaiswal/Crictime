import { Component, OnInit } from '@angular/core';
import { GameService } from '../../common/game.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {


  cricketNews: any[];
  matchSquad: any[];
  myData: any[];
  matchScore;
  MatchTeams: any[];
  MatchScoresBatting: any[];
  MatchScoresBowling: any[];
  MatchScoresFielding: any[];
  MatchTossWin: any[];
  MatchManofMatch: any[];
  MatchWin: string;
  showSquad = false;
  showScore = true;
  totalScore: any;
  MatchesSchedule: any[];
  first: any[] = [];
  second: any[] = [];
  third: any[] = [];
  fourth: any[] = [];
  uId: any;
  tossWin: string;
  chooseComp: string;
  constructor(private gamesrv: GameService, private route: ActivatedRoute) { }




  ngOnInit() {
    this.route.params.subscribe((responce) => {
      this.uId = responce.uId;
      this.chooseComp = responce.chooseS;
    });
    this.getCricketScores(this.uId, this.chooseComp);
    this.getCriketDetail(this.uId);
    // this.getMatchSquad(this.uId);
  }

  getCricketScores(uId, chooseComp) {

    if (chooseComp === 'Squad' ) {
      this.showSquad = true;
      this.showScore = false;

      this.gamesrv.getMatchSquad(uId).subscribe( (squd) => {
        this.matchSquad = squd.squad;
        this.showSquad = true;
        console.log(this.matchSquad);
      });

    } else if (chooseComp === 'Scorecard' ) {
      this.showScore = true;
      this.showSquad = false;

      this.gamesrv.getCricketScores(uId).subscribe((data) => {
        if (typeof data !== undefined) {
         // this.myData = data.data;
          if ( typeof this.myData  !== undefined) {
            this.MatchTeams = data.data.team;
            this.MatchScoresBatting = data.data.batting;

            this.first.push(data.data.batting[0]);
            this.first.push(data.data.bowling[0]);
            this.first.push(data.data.batting[1]);
            this.third.push(data.data.batting[2]);
            this.fourth.push(data.data.batting[3]);

            this.second.push(data.data.bowling[1]);
            this.third.push(data.data.bowling[2]);
            this.fourth.push(data.data.bowling[3]);
            this.MatchScoresBatting.filter((element) => {
              element.scores.filter((ele) => {
                ele.Fours = ele['4s'];
                ele.Sixes = ele['6s'];
                ele.dismissalInfo = ele['dismissal-info'];
              });
            });
            this.MatchScoresBowling = data.data.bowling;
            this.MatchScoresFielding = data.data.fielding;
            if (data.data['man-of-the-match'] === '') {
              this.MatchManofMatch = null;
            } else {
              this.MatchManofMatch = data.data['man-of-the-match'].name;
            }
            this.tossWin = data.data.toss_winner_team;
            if ( data.data.winner_team !== 'undefined') {
              this.MatchWin = data.data.winner_team;
            }

            console.log(this);
          }

        }
      });

    }


  }

  getMatchSquad(uId) {
    this.showScore = false;
    this.gamesrv.getMatchSquad(uId).subscribe( (squd) => {
      this.matchSquad = squd.squad;
      this.showSquad = true;
      console.log(this.matchSquad);
    });
  }

  getCriketDetail(uId) {
    this.gamesrv.getCriketDetail(uId).subscribe((detail) => {
      if (detail.error) {
        alert(detail.error);
      } else {
        this.totalScore = detail.score;
        detail.team1 = detail['team-1'];
        detail.team2 = detail['team-2'];
      }


      console.log(detail);
    });
  }


  // getCricketScores() {
  //   this.gamesrv.getCricketScores().subscribe( (data) => {
  //     if (typeof data !== undefined) {
  //       this.myData = data.data;
  //     }
  //   });
  // }

}
