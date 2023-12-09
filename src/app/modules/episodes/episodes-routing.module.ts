import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EpisodesComponent} from "@app/modules/episodes/pages/episodes/episodes.component";

const routes: Routes = [
  {
    path: '',
    component: EpisodesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }