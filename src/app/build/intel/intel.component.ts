import { Component, OnInit } from '@angular/core';
import { PcsService, pcsType } from 'src/app/Services/buildservice/pcs.service';

@Component({
  selector: 'app-intel',
  templateUrl: './intel.component.html',
  styleUrls: ['./intel.component.scss']
})
export class IntelComponent implements OnInit {
  intelpcs!: pcsType[];


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
    this.pcsservice.getIntel().subscribe((data) => {
      this.intelpcs = data;
    })
  }

}
