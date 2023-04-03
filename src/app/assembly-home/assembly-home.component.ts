import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import  SwiperCore, { Autoplay, Pagination } from "swiper";

SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: 'app-assembly-home',
  templateUrl: './assembly-home.component.html',
  styleUrls: ['./assembly-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AssemblyHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
