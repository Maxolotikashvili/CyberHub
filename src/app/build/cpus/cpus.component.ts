import { Component, OnInit } from '@angular/core';
import { CpusService, cpusType } from 'src/app/Services/buildservice/cpus.service';

@Component({
  selector: 'app-cpus',
  templateUrl: './cpus.component.html',
  styleUrls: ['./cpus.component.scss']
})
export class CpusComponent implements OnInit {
  cpus!: cpusType[];


  constructor(private cpusservice: CpusService) { }

  ngOnInit(): void {

    // Get CPU-s
    this.cpusservice.getCpus().subscribe((data) => {
      this.cpus = data;
    })
  }

}
