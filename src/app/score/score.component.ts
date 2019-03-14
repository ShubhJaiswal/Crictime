import { Component, OnInit } from '@angular/core';
import { GameService } from '../common/game.service';
import { Newtype } from '../common/NewType';
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})

export class ScoreComponent implements OnInit {


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
  MatchWin: any[];
  showSquad: Boolean = false;
  showScore: boolean = false;
  totalScore;

  constructor(private gameSer: GameService) { }

  ngOnInit() {
    // this.gameSer.getcricMatches().subscribe((news) => {
    //   this.cricketNews = news.matches;
    //   news.matches.forEach(element => {
    //     element['team1'] = element['team-1'];
    //     element['team2'] = element['team-2'];
    //   });
    // });

    this.getcricMatches();
  }

  getCricketScores(uId) {
    debugger
    this.getCriketDetail(uId);
    this.showSquad = false;
    this.gameSer.getCricketScores(uId).subscribe((data) => {
      if (typeof data !== undefined) {
        this.myData = data.data;
        this.MatchTeams = data.data.team;
        this.MatchScoresBatting = data.data.batting;

        this.MatchScoresBatting.filter((element) => {
          element.scores.filter((ele) => {
            ele['Fours'] = ele['4s'];
            ele['Sixes'] = ele['6s'];
            ele['dismissalInfo'] = ele['dismissal-info'];

          });
        });
        this.MatchScoresBowling = data.data.bowling;
        this.MatchScoresFielding = data.data.fielding
        this.MatchManofMatch = data.data['man-of-the-match'].name;
        this.MatchWin = data.data.toss_winner_team;
        console.log(this);
      }
    });
  }

  getMatchSquad(uId) {
    this.showSquad = true;
    // this.gameSer.getMatchSquad(uId).subscribe( (squd) => {
    //   this.matchSquad = squd.squad;
    //   console.log(this.matchSquad);
    // });

  }

  getScoreCard() {
    this.showScore = true;
    this.showSquad = false;
  }

  getcricMatches() {
    this.gameSer.getcricMatches().subscribe((news) => {
      this.cricketNews = news.matches;
      console.log(news);
      news.matches.forEach(element => {
        element['team1'] = element['team-1'];
        element['team2'] = element['team-2'];
      });
    });
  }

  getCriketDetail(uId) {
    this.gameSer.getCriketDetail(uId).subscribe((detail) => {
      this.totalScore = detail.score;
       console.log(detail);
    });
  }


}






// selectedCountry: string;
// contries: any[] = [
  //   { code: 'ind', country: 'India' },
  //   { code: 'nz', country: 'New Zeland' },
  //   { code: 'aus', country: 'Austraila' }
  // ];
  // choice(data) {
  //   this.selectedCountry = data;
  // }
