import { Component, OnInit } from '@angular/core';
import { HeadsetsService, headsetsType } from 'src/app/Services/buildservice/headsets.service';

@Component({
  selector: 'app-headsets',
  templateUrl: './headsets.component.html',
  styleUrls: ['./headsets.component.scss']
})
export class HeadsetsComponent implements OnInit {
  headsets!: headsetsType[];

  constructor(private headsetsservice: HeadsetsService) { }

  ngOnInit(): void {
    this.headsetsservice.getHeadsets().subscribe((data) => {
      this.headsets = data;
    })
  }

}
