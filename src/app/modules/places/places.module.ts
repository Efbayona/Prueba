import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { PlacesComponent } from './pages/places/places.component';
import { PlacesDetailComponent } from './pages/places-detail/places-detail.component';


@NgModule({
  declarations: [
    PlacesComponent,
    PlacesDetailComponent
  ],
  imports: [
    CommonModule,
    PlacesRoutingModule
  ]
})
export class PlacesModule { }
