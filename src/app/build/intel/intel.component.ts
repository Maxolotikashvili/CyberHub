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

    // Spinner Timeout
    this.spinnerboxshow = "spinnerboxshow";

    setTimeout(() => {
      this.spinnerboxshow = "spinnerboxhide";
      this.blur = "";
    }, 1500);

    this.pcsservice.getIntel().subscribe((data) => {
      this.intelpcs = data;
    })
  }

}
