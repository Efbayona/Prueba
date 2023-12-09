import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './shared/layouts/card/card.component';
import { LandingPageComponent } from './shared/layouts/landing-page/landing-page.component';
import { LoadingComponent } from './shared/layouts/loading/loading.component';
import { MainComponent } from './modules/main/main.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LandingPageComponent,
    LoadingComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
