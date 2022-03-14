import { Component, OnInit } from '@angular/core';
import { RamsService, ramsType } from 'src/app/Services/buildservice/rams.service';

@Component({
  selector: 'app-rams',
  templateUrl: './rams.component.html',
  styleUrls: ['./rams.component.scss']
})
export class RamsComponent implements OnInit {
  rams!: ramsType[];

  constructor(private ramsservice: RamsService) { }

  ngOnInit(): void {
    this.ramsservice.getRams().subscribe((data) => {
      this.rams = data;
    })
  }

}
