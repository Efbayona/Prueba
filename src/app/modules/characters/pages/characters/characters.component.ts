import { Component, OnInit } from '@angular/core';
import {CharactersService} from "@app/modules/characters/services/characters.service";
import {Router} from "@angular/router";
import {Characters, DataObjet} from "@app/modules/characters/interfaces/characters.interfaces";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  dataCharacters: Characters[] = [];

  constructor(private _characters: CharactersService,
              private router: Router) { }

  ngOnInit(): void {
    this.getDataCharacters();
  }

  getDataCharacters(){
    this._characters.getCharacters().subscribe( {
      next: (data: DataObjet): void => {
        this.dataCharacters = data.results;
        console.log(this.dataCharacters)
      }
    })
  }

  characterDetail(id: number): void {
    this.router.navigateByUrl(`/characters/${id}`).then();
  }

  navigateToCharacters(){
    this.router.navigateByUrl('/characters').then();
  }

  navigateToPlaces(){
    this.router.navigateByUrl('/places').then();
  }

  navigateToEpisodes(){
    this.router.navigateByUrl('/episodes').then();
  }
}
