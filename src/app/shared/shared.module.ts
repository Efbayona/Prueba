import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingPageComponent} from "@app/shared/layouts/landing-page/landing-page.component";
import {LoadingComponent} from "@app/shared/layouts/loading/loading.component";
import { CardComponent } from './layouts/card/card.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    LoadingComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoadingComponent,
    CardComponent
  ]
})
export class SharedModule { }
