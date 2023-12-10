import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EpisodesComponent} from "@app/modules/episodes/pages/episodes/episodes.component";
import {EpisodesDetailComponent} from "@app/modules/episodes/pages/episodes-detail/episodes-detail.component";

const routes: Routes = [
  {
    path: '',
    component: EpisodesComponent
  },
  {
    path: ':id',
    component: EpisodesDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
