import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-home',
  templateUrl: './build-home.component.html',
  styleUrls: ['./build-home.component.scss']
})
export class BuildHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Scroll Up
    window.scrollTo(0, 0);
  }

}
