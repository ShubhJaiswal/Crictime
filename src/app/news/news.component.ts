import { Component, OnInit } from '@angular/core';
import { GameService } from '../common/game.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  myData: any[];
  constructor(private gamesrv: GameService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.gamesrv.getNews().subscribe( (data) => {
      if (typeof data !== undefined) {
        this.myData = data.articles;
      }
    });
  }

}
