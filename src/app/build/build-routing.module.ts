import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmdComponent } from './amd/amd.component';
import { BuildHomeComponent } from './build-home/build-home.component';
import { BuildComponent } from './build.component';
import { CasesComponent } from './cases/cases.component';
import { CpuCoolersComponent } from './cpu-coolers/cpu-coolers.component';
import { CpusComponent } from './cpus/cpus.component';
import { GpusComponent } from './gpus/gpus.component';
import { HddsComponent } from './hdds/hdds.component';
import { HeadsetsComponent } from './headsets/headsets.component';
import { IntelComponent } from './intel/intel.component';
import { KeyboardsComponent } from './keyboards/keyboards.component';
import { MobosComponent } from './mobos/mobos.component';
import { PctypeComponent } from './pctype/pctype.component';
import { PsusComponent } from './psus/psus.component';
import { RamsComponent } from './rams/rams.component';
import { SsdsComponent } from './ssds/ssds.component';

const routes: Routes = [
  { 
    path: '', component: BuildComponent,
    children: [

      {
        path: "buildhome",
        component: BuildHomeComponent
      },

      {
        path: "",
        redirectTo: "/build/buildhome",
        pathMatch: "full"
      },

      {
        path: "pctype",
        component: PctypeComponent
      },

      {
        path: "pctype/intel",
        component: IntelComponent
      },

      {
        path: "pctype/amd",
        component: AmdComponent
      },

      {
        path: "cpus",
        component: CpusComponent
      },

      {
        path: "mobos",
        component: MobosComponent
      },

      {
        path: "gpus",
        component: GpusComponent
      },

      {
        path: "rams",
        component: RamsComponent
      },

      {
        path: "psus",
        component: PsusComponent
      },

      {
        path: "ssds",
        component: SsdsComponent
      },

      {
        path: "hdds",
        component: HddsComponent
      },

      {
        path: "cpu-coolers",
        component: CpuCoolersComponent
      },

      {
        path: "cases",
        component: CasesComponent
      },

      {
        path: "keyboards",
        component: KeyboardsComponent
      },

      {
        path: "headsets",
        component: HeadsetsComponent
      }
    ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildRoutingModule { }
