import { Component, OnInit } from '@angular/core';
import { GameService } from '../common/game.service';
import { Newtype } from '../common/NewType';
import { Router } from '@angular/router';
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
  showSquad = false;
  showScore = false;
  totalScore: any;
  MatchesSchedule: any[];

  constructor(private gameSer: GameService, private router: Router) { }

  ngOnInit() {
    this.getScheduledMatch();
    this.getcricMatches();
  }

  getCricketScores(uId, chooseS) {
    this.router.navigate(['/scorecard', { uId, chooseS }]).then((e) => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });

    // this.getCriketDetail(uId);
    // this.showSquad = false;
    // this.gameSer.getCricketScores(uId).subscribe((data) =  > {
    //   if (typeof data !== undefined) {
    //     this.myData = data.data;
    //     this.MatchTeams = data.data.team;
    //     this.MatchScoresBatting = data.data.batting;

    //     this.MatchScoresBatting.filter((element) => {
    //       element.scores.filter((ele) => {
    //         ele.Fours = ele['4s'];
    //         ele.Sixes = ele['6s'];
    //         ele.dismissalInfo = ele['dismissal-info'];
    //       });
    //     });
    //     this.MatchScoresBowling = data.data.bowling;
    //     this.MatchScoresFielding = data.data.fielding;
    //     this.MatchManofMatch = data.data['man-of-the-match'].name;
    //     this.MatchWin = data.data.winner_team;
    //     console.log(this);
    //   }
    // });
  }

  getMatchSquad(uId) {
    this.showSquad = true;
    // this.gameSer.getMatchSquad(uId).subscribe( (squd) => {
    //   this.matchSquad = squd.squad;
    //   console.log(this.matchSquad);
    // });

  }

  getScheduledMatch() {
    this.gameSer.getScheduledMatch().subscribe((matches) => {
      if (matches.error) {
        alert(matches.error);
      } else {
        this.MatchesSchedule = matches;
        console.log(this.MatchesSchedule);
      }
    });
  }

  getScoreCard() {
    this.showScore = true;
    this.showSquad = false;
  }

  getcricMatches() {
    this.gameSer.getcricMatches().subscribe((news) => {
      if (news.error) {
        alert(news.error);
      } else {
        this.cricketNews = news.matches;
        console.log(news);
        news.matches.forEach(element => {
          element.team1 = element['team-1'];
          element.team2 = element['team-2'];
        });
      }
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
