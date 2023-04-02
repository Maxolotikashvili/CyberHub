import { Component, OnInit } from '@angular/core';
import { PcsService } from 'src/app/Services/buildservice/pcs.service';
import { PcsType } from 'src/app/model';

@Component({
  selector: 'app-amd',
  templateUrl: './amd.component.html',
  styleUrls: ['./amd.component.scss']
})
export class AmdComponent implements OnInit {
  amdpcs!: PcsType[];


  // Spinner
  spinnerboxshow = "spinnerboxshow";
  blur = "blur";

  constructor(private pcsservice: PcsService) { }

  ngOnInit(): void {

    // Scroll Up
    window.scrollTo(0, 0);

    // Spinner Timeout
    this.spinnerboxshow = "spinnerboxshow";

    setTimeout(() => {
      this.spinnerboxshow = "spinnerboxhide";
      this.blur = "";
    }, 1500);

    // Get Items
    this.pcsservice.getAmd().subscribe((data) => {
      this.amdpcs = data;
    })
  }

}
