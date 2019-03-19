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

 // API --- sjaiswal0231 = dbvFmMyQlcfTzny6KeHVoUxHZn22

 // API --- shubhujais1995 = 3dd49f32bacc45789730b2f0c21a606d

  public getNews(): Observable <any> {
    return this.http.get<any[]>('https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=3dd49f32bacc45789730b2f0c21a606d');
   // return this.http.get<any[]>('https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=dbvFmMyQlcfTzny6KeHVoUxHZn22');
  }

  public getCricketScores(uId): Observable <any> {
    return this.http.get<any[]>('http://cricapi.com/api/fantasySummary?unique_id=' + uId + '&apikey=8GvJF6a9P9hia8jELVmHxZx7iPy2');
  // return this.http.get<any[]>('http://cricapi.com/api/fantasySummary?unique_id=' + uId + '&apikey=dbvFmMyQlcfTzny6KeHVoUxHZn22');

  }



  public getcricMatches(): Observable<any> {
   return this.http.get<any[]>('https://cricapi.com/api/matches?apikey=8GvJF6a9P9hia8jELVmHxZx7iPy2');
  // return this.http.get<any[]>('https://cricapi.com/api/matches?apikey=dbvFmMyQlcfTzny6KeHVoUxHZn22');

   }

  public getMatchSquad(uId): Observable<any> {
    return this.http.get<any[]>('http://cricapi.com/api/fantasySquad?unique_id=' + uId + '&apikey=8GvJF6a9P9hia8jELVmHxZx7iPy2');
   // return this.http.get<any[]>('http://cricapi.com/api/fantasySquad?unique_id=' + uId + '&apikey=dbvFmMyQlcfTzny6KeHVoUxHZn22');
  }

  public getCriketDetail(uId): Observable<any> {
    return this.http.get<any[]>('https://cricapi.com/api/cricketScore/data?unique_id=' + uId + '&apikey=8GvJF6a9P9hia8jELVmHxZx7iPy2');
   // return this.http.get<any[]>('https://cricapi.com/api/cricketScore/data?unique_id=' + uId + '&apikey=dbvFmMyQlcfTzny6KeHVoUxHZn22');
  }

  public getScheduledMatch(): Observable<any> {
    return this.http.get<any[]>('http://cricapi.com/api/matchCalendar?apikey=8GvJF6a9P9hia8jELVmHxZx7iPy2');
   // return this.http.get<any[]>('http://cricapi.com/api/matchCalendar?apikey=dbvFmMyQlcfTzny6KeHVoUxHZn22');
  }
}





  // return this.http.get<any[]>('https://cricapi.com/api/cricket?apikey=8GvJF6a9P9hia8jELVmHxZx7iPy2&limit=100');
// this.http.get<any[]>('https://dev132-cricket-live-scores-v1.p.rapidapi.com/scorecards.php?

// seriesid=2141&matchid=43431&apikey=ESPNFAN3599193201');
    // return this.http.get<any[]>('https://cricapi.com/api/cricketScore?apikey=8GvJF6a9P9hia8jELVmHxZx7iPy2');


// public getcricNews(): Observable< any[]> {
  //   //return this.http.get<any[]>('http://www.cricapi.com/news?8GvJF6a9P9hia8jELVmHxZx7iPy2');

  //   //return this.http.get<any[]>('https://www.cricapi.com/players?apikey=8GvJF6a9P9hia8jELVmHxZx7iPy2');

  // return this.http.get<any[]>('https://www.cricbuzz.com/live-cr

  // icket-scores/20795/nz-vs-ban-2nd-test-bangladesh-tour-of-new-zealand-2019');
  // }
