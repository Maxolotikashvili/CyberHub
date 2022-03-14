import { Component, OnInit } from '@angular/core';
import { CasesService, casesType } from 'src/app/Services/buildservice/cases.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  cases!: casesType[];

  constructor(private casesservice: CasesService) { }

  ngOnInit(): void {
    this.casesservice.getCases().subscribe((data) => {
      this.cases = data;
    })
  }

}
