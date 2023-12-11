import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  currentPage: number = 1;
  searchTerm = '';

  constructor(private _characters: CharactersService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getDataCharacters();
    this.loadCharacters();
  }

  getDataCharacters() {
    this._characters.getCharacters().subscribe({
      next: (data: DataObjet): void => {
        this.dataCharacters = data.results;
      }
    })
  }

  loadCharacters(): void {
    this._characters.getCharactersPage(this.currentPage , this.searchTerm).subscribe({
      next: (data): void => {
        this.dataCharacters = data.results;
      }
    });
  }



  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadCharacters();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.onPageChange(this.currentPage - 1);
    }
  }

  nextPage(): void {
    this.onPageChange(this.currentPage + 1);
  }
  onSearchChange(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.loadCharacters();
  }

  characterDetail(id: number): void {
    this.router.navigateByUrl(`/characters/${id}`).then();
  }

  navigateToCharacters() {
    this.router.navigateByUrl('/characters').then();
  }

  navigateToPlaces() {
    this.router.navigateByUrl('/places').then();
  }

  navigateToEpisodes() {
    this.router.navigateByUrl('/episodes').then();
  }
}
