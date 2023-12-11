import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EpisodesService} from "@app/modules/episodes/services/episodes.service";
import {CharactersService} from "@app/modules/characters/services/characters.service";

@Component({
  selector: 'app-episodes-detail',
  templateUrl: './episodes-detail.component.html',
  styleUrls: ['./episodes-detail.component.scss']
})
export class EpisodesDetailComponent implements OnInit {

  dataCharactersDetail: any;
  dataEpisodesDetail: any;
  dataCharacters: any;
  episodes_id: string | null = null;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private _episodes: EpisodesService,
              private _characters: CharactersService) {
  }

  ngOnInit(): void {
    this.episodes_id = this.route.snapshot.paramMap.get('id');
    this.getEpisodes();

  }

  getEpisodes() {
    this._episodes.getEpisodes().subscribe({
      next: (data) => {
        if (!data.results || this.episodes_id === null) {
          console.error('Datos de episodio no válidos.');
          return;
        }

        const episodeIndex = +this.episodes_id;
        if (isNaN(episodeIndex) || episodeIndex < 0 || episodeIndex >= data.results.length) {
          console.error('ID de episodio no válido.');
          return;
        }

        this.dataEpisodesDetail = data.results[episodeIndex - 1];
        this.dataCharacters = this.dataEpisodesDetail.characters;
        const characterIds = this.extractCharacterIds(this.dataCharacters);
        this.getCharactersId(characterIds);
      }
    });
  }

  getCharactersId(ids: number[]) {

    this._characters.getCharactersId(ids).subscribe({
      next: (data) => {
        this.dataCharactersDetail = data;
      }
    });
  }

  extractCharacterIds(characterUrls: string[]): number[] {
    return characterUrls.map((characterUrl) => parseInt(characterUrl.split('/').pop() || "", 10)).filter((id) => !isNaN(id));
  }

  navigateToEpisodes() {
    this.router.navigateByUrl('/episodes').then();

  }
}
