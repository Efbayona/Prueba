import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { EpisodesDetailComponent } from './pages/episodes-detail/episodes-detail.component';
import {SharedModule} from "@app/shared/shared.module";


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodesDetailComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    SharedModule
  ]
})
export class EpisodesModule { }
