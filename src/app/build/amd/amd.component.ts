import { Component, OnInit } from '@angular/core';
import { PcPartType } from 'src/app/model';

@Component({
  selector: 'app-amd',
  templateUrl: './amd.component.html',
  styleUrls: ['./amd.component.scss']
})
export class AmdComponent implements OnInit {
  amdpcs!: PcPartType[];


  // Spinner
  spinnerboxshow = "spinnerboxshow";
  blur = "blur";

  constructor() { }

  ngOnInit(): void {

    // Scroll Up
    window.scrollTo(0, 0);

    // Get Items
  
      // this.amdpcs = data;
  }

}
