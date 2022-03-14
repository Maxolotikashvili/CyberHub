import { Component, OnInit } from '@angular/core';
import { GpusService, gpusType } from 'src/app/Services/buildservice/gpus.service';

@Component({
  selector: 'app-gpus',
  templateUrl: './gpus.component.html',
  styleUrls: ['./gpus.component.scss']
})
export class GpusComponent implements OnInit {
  gpus!: gpusType[];

  constructor(private gpusservice: GpusService) { }

  ngOnInit(): void {
    
    // Get Gpus 
    this.gpusservice.getGpus().subscribe((data: gpusType[]) => {
        this.gpus = data;
      })

  }

}
