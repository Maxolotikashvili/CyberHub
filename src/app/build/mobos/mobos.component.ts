import { Component, OnInit } from '@angular/core';
import { MobosService, mobosType } from 'src/app/Services/buildservice/mobos.service';

@Component({
  selector: 'app-mobos',
  templateUrl: './mobos.component.html',
  styleUrls: ['./mobos.component.scss']
})
export class MobosComponent implements OnInit {
  mobos!: mobosType[];

  constructor(private mobosservice: MobosService) { }

  ngOnInit(): void {

    // Get MOBO-s
    this.mobosservice.getMobos().subscribe((data) => {
      this.mobos = data;
    })
  }

}
