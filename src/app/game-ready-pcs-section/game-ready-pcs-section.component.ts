import { Component, OnInit, OnDestroy } from '@angular/core';
import { PcPartsService } from '../Services/buildservice/pc-parts.service';
import { PcPartType } from '../model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-ready-pcs-section',
  templateUrl: './game-ready-pcs-section.component.html',
  styleUrls: ['./game-ready-pcs-section.component.scss']
})
export class GameReadyPcsSectionComponent implements OnInit, OnDestroy {
  completedBuildsSubscription!: Subscription;
  completedBuilds: PcPartType[] = [];

  constructor(private pcPartsService: PcPartsService) { }

  ngOnInit(): void {
    this.downloadCompletedBuilds();
  }

  downloadCompletedBuilds() {
    this.completedBuildsSubscription = this.pcPartsService.getPcParts().subscribe((items: PcPartType[]) => {
      this.completedBuilds = items.filter((pcs: PcPartType) => pcs.id === 122 || pcs.id === 125 || pcs.id === 131);
    })
  
    for (let pc of this.completedBuilds) {
      pc.ram = pc.ram?.slice(0, 14)
      pc.memory = pc.memory?.slice(9)
    }
  }

  //
  ngOnDestroy(): void {
      this.completedBuildsSubscription.unsubscribe();
  }
}
