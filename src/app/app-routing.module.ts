import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "@app/shared/layouts/landing-page/landing-page.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'characters',
    loadChildren: () => import('@app/modules/characters/characters.module').then(m => m.CharactersModule),
  },
  {
    path: 'episodes',
    loadChildren: () => import('@app/modules/episodes/episodes.module').then(m => m.EpisodesModule),
  },
  {
    path: 'places',
    loadChildren: () => import('@app/modules/places/places.module').then(m => m.PlacesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
