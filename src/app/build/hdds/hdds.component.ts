import { Component, OnInit } from '@angular/core';
import { HddsService, hddsType } from 'src/app/Services/buildservice/hdds.service';

@Component({
  selector: 'app-hdds',
  templateUrl: './hdds.component.html',
  styleUrls: ['./hdds.component.scss']
})
export class HddsComponent implements OnInit {
  hdds!: hddsType[];

  constructor(private hddservice: HddsService) { }

  ngOnInit(): void {
    this.hddservice.getHdds().subscribe((data) => {
      this.hdds = data;
    })
  }

}
