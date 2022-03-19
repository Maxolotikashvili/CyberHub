import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { BuildComponent } from './build.component';
import { CasesComponent } from './cases/cases.component';
import { CpuCoolersComponent } from './cpu-coolers/cpu-coolers.component';
import { CpusComponent } from './cpus/cpus.component';
import { GpusComponent } from './gpus/gpus.component';
import { HddsComponent } from './hdds/hdds.component';
import { HeadsetsComponent } from './headsets/headsets.component';
import { KeyboardsComponent } from './keyboards/keyboards.component';
import { MobosComponent } from './mobos/mobos.component';
import { PsusComponent } from './psus/psus.component';
import { RamsComponent } from './rams/rams.component';
import { SsdsComponent } from './ssds/ssds.component';

const routes: Routes = [
  { 
    path: '', component: BuildComponent,
    children: [

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
