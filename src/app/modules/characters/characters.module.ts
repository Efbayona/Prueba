import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './pages/characters/characters.component';
import {SharedModule} from "@app/shared/shared.module";
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class CharactersModule { }
