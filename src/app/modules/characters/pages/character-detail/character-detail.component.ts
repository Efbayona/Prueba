import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CharactersService} from "@app/modules/characters/services/characters.service";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  dataCharactersDetail: any;
  characters_id: string | null = null;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private _characters: CharactersService) {
  }

  ngOnInit(): void {
    this.characters_id = this.route.snapshot.paramMap.get('id');
    this.getCharacters();
  }

  getCharacters() {
    this._characters.getCharacters().subscribe({
      next: (data) => {
        if (data.results && this.characters_id !== null) {
          const characterIndex = +this.characters_id;
          if (!isNaN(characterIndex) && characterIndex >= 0 && characterIndex < data.results.length) {
            this.dataCharactersDetail = data.results[characterIndex - 1];
          } else {
            console.error('ID de personaje no válido.');
          }
        } else {
          console.error('Datos de personajes no válidos.');
        }
      }
    });
  }

  navigateToCharacters() {
    this.router.navigateByUrl('/characters').then();
  }

}
