import { Component, OnInit} from '@angular/core';
import { accessoriesType, NewsService, newsType, partsType } from '../Services/news.service';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  accessories!: accessoriesType[];
  news!: newsType[];
  parts!: partsType[];

  constructor(private newsservice: NewsService) { }

  ngOnInit(): void {

    // Get Accessories
    this.newsservice.getAccessories().subscribe((data) => {
      this.accessories = data;
    })

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
