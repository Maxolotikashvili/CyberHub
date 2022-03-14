import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildRoutingModule } from './build-routing.module';
import { BuildComponent } from './build.component';
import { GpusComponent } from './gpus/gpus.component';
import { CpusComponent } from './cpus/cpus.component';
import { MobosComponent } from './mobos/mobos.component';
import { RamsComponent } from './rams/rams.component';
import { SsdsComponent } from './ssds/ssds.component';
import { HddsComponent } from './hdds/hdds.component';
import { CpuCoolersComponent } from './cpu-coolers/cpu-coolers.component';
import { CasesComponent } from './cases/cases.component';
import { PsusComponent } from './psus/psus.component';
import { KeyboardsComponent } from './keyboards/keyboards.component';
import { HeadsetsComponent } from './headsets/headsets.component';


@NgModule({
  declarations: [
    BuildComponent,
    GpusComponent,
    CpusComponent,
    MobosComponent,
    RamsComponent,
    SsdsComponent,
    HddsComponent,
    CpuCoolersComponent,
    CasesComponent,
    PsusComponent,
    KeyboardsComponent,
    HeadsetsComponent
  ],
  imports: [
    CommonModule,
    BuildRoutingModule
  ]
})
export class BuildModule { }
