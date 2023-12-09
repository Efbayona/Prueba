import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from "@app/modules/characters/pages/characters/characters.component";
import {CharacterDetailComponent} from "@app/modules/characters/pages/character-detail/character-detail.component";

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent
  },
  {
    path: ':id',
    component: CharacterDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
