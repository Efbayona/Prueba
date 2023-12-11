import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataObjet} from "@app/modules/characters/interfaces/characters.interfaces";
import {EpisodesService} from "@app/modules/episodes/services/episodes.service";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  dataEpisodes: any[] = [];
  currentPage: number = 1;
  searchTerm = '';

  constructor(private router: Router,
              private _episodes: EpisodesService) {
  }

  ngOnInit(): void {
    this.getDataEpisodes();
    this.loadEpisodes();
  }

  getDataEpisodes() {
    this._episodes.getEpisodes().subscribe({
      next: (data): void => {
        this.dataEpisodes = data.results;
      }
    })
  }

  loadEpisodes(): void {
    this._episodes.getEpisodePage(this.currentPage, this.searchTerm).subscribe({
      next: (data): void => {
        this.dataEpisodes = data.results;
      } ,error(error){
        console.log('No hay mas datos');
      }
    });
  }

  onSearchChange(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.loadEpisodes();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadEpisodes();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.onPageChange(this.currentPage - 1);
    }
  }

  nextPage(): void {
    this.onPageChange(this.currentPage + 1);
  }

  episodesDetail(id: number): void {
    this.router.navigateByUrl(`/episodes/${id}`).then();
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
