import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlacesService} from "@app/modules/places/services/places.service";
import {CharactersService} from "@app/modules/characters/services/characters.service";

@Component({
  selector: 'app-places-detail',
  templateUrl: './places-detail.component.html',
  styleUrls: ['./places-detail.component.scss']
})
export class PlacesDetailComponent implements OnInit {

  dataCharactersDetail: any;
  dataPlacesDetail: any;
  places_id: string | null = null;
  dataCharacters: any;

  constructor(private router: Router,
              private _places: PlacesService,
              private route: ActivatedRoute,
              private _characters: CharactersService) {
  }

  ngOnInit(): void {
    this.places_id = this.route.snapshot.paramMap.get('id');
    this.getPlaces();
  }

  getPlaces() {
    this._places.getPlaces().subscribe({
      next: (data) => {
        if (!data.results || this.places_id === null) {
          console.error('Datos de Lugar no válidos.');
          return;
        }

        const placeIndex = +this.places_id;
        if (isNaN(placeIndex) || placeIndex < 0 || placeIndex >= data.results.length) {
          console.error('ID de Lugar no válido.');
          return;
        }

        this.dataPlacesDetail = data.results[placeIndex - 1];
        this.dataCharacters = this.dataPlacesDetail.residents;
      }
    });
  }

  navigateToPlaces() {
    this.router.navigateByUrl('/places').then();
  }
}
