import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingPageComponent} from "@app/shared/layouts/landing-page/landing-page.component";
import {LoadingComponent} from "@app/shared/layouts/loading/loading.component";

@NgModule({
  declarations: [
    LandingPageComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LoadingComponent]
})
export class SharedModule { }
