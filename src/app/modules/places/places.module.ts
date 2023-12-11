import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { PlacesComponent } from './pages/places/places.component';
import { PlacesDetailComponent } from './pages/places-detail/places-detail.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PlacesComponent,
    PlacesDetailComponent
  ],
    imports: [
        CommonModule,
        PlacesRoutingModule,
        FormsModule
    ]
})
export class PlacesModule { }
