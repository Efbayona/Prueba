import { Component, OnInit } from '@angular/core';
import {CharactersService} from "@app/modules/characters/services/characters.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private _characters: CharactersService) { }

  ngOnInit(): void {
    this.metodo();
  }

  metodo(){
    this._characters.getCharacters().subscribe( {
      next: (data): void => {
        console.log(data)
      }
    })
  }
}
