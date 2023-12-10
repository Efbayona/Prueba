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

  constructor(private router: Router,
              private _episodes: EpisodesService) {
  }

  ngOnInit(): void {
    this.getDataEpisodes();
  }

  getDataEpisodes() {
    this._episodes.getEpisodes().subscribe({
      next: (data): void => {
        this.dataEpisodes = data.results;
      }
    })
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
