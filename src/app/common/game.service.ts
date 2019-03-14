import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Newtype } from './NewType';
@Injectable({
  providedIn: 'root'
})
export class GameService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit() {

  }

  public getNews(): Observable <any[]> {
    return this.http.get<any[]>('https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=3dd49f32bacc45789730b2f0c21a606d');
  }

  public getCricketScores(uId): Observable <any[]> {
    return this.http.get<any[]>('http://cricapi.com/api/fantasySummary?unique_id='+uId+'&apikey=8GvJF6a9P9hia8jELVmHxZx7iPy2&limit=100');

  }



  public getcricMatches(): Observable<any[]> {
   return this.http.get<any[]>('https://cricapi.com/api/matches?apikey=8GvJF6a9P9hia8jELVmHxZx7iPy2');
   }

  public getMatchSquad(uId): Observable<any[]> {
    return this.http.get<any[]>('http://cricapi.com/api/fantasySquad?unique_id='+uId+'&apikey=8GvJF6a9P9hia8jELVmHxZx7iPy2');
  }

  public getCriketDetail(uId): Observable<any[]> {
    return this.http.get<any[]>('https://cricapi.com/api/cricketScore/data?unique_id='+uId+'&limit=5000&offset=2000&top=5000&apikey=8GvJF6a9P9hia8jELVmHxZx7iPy2');
  }

}





  // return this.http.get<any[]>('https://cricapi.com/api/cricket?apikey=8GvJF6a9P9hia8jELVmHxZx7iPy2&limit=100');
    // return this.http.get<any[]>('https://dev132-cricket-live-scores-v1.p.rapidapi.com/scorecards.php?seriesid=2141&matchid=43431&apikey=ESPNFAN3599193201');
    // return this.http.get<any[]>('https://cricapi.com/api/cricketScore?apikey=8GvJF6a9P9hia8jELVmHxZx7iPy2');


// public getcricNews(): Observable< any[]> {
  //   //return this.http.get<any[]>('http://www.cricapi.com/news?8GvJF6a9P9hia8jELVmHxZx7iPy2');

  //   //return this.http.get<any[]>('https://www.cricapi.com/players?apikey=8GvJF6a9P9hia8jELVmHxZx7iPy2');

  // return this.http.get<any[]>('https://www.cricbuzz.com/live-cricket-scores/20795/nz-vs-ban-2nd-test-bangladesh-tour-of-new-zealand-2019');
  // }
