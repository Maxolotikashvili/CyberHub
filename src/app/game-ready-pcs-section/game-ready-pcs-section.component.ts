import { Component, OnInit } from '@angular/core';
import { PcPartsService } from '../Services/buildservice/pc-parts.service';
import { PcPartType } from '../model';

@Component({
  selector: 'app-game-ready-pcs-section',
  templateUrl: './game-ready-pcs-section.component.html',
  styleUrls: ['./game-ready-pcs-section.component.scss']
})
export class GameReadyPcsSectionComponent implements OnInit {
  completedBuilds: PcPartType[] = [];

  constructor(private pcPartsService: PcPartsService) { }

  ngOnInit(): void {
    this.downloadCompletedBuilds();
  }

  downloadCompletedBuilds() {
    this.completedBuilds = this.pcPartsService.getPcParts().filter((pcs) => pcs.id === 122 || pcs.id === 125 || pcs.id === 131);
    console.log(this.completedBuilds[0]);
    
  }

}
