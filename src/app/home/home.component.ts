import { Component, OnInit } from '@angular/core';
import { NewsService, newsType, partsType } from '../Services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news!: newsType[];
  parts!: partsType[];

  constructor(private newsservice: NewsService) { }

  ngOnInit(): void {

    // Scroll Up
    window.scrollTo(0, 0);

    // Get News
    this.newsservice.getNews().subscribe((data) => {
      this.news = data
    });

    // Get Parts
    this.newsservice.getParts().subscribe((data) => {
      this.parts = data;
    })
  }

}
