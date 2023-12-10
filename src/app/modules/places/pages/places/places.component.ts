import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PlacesService} from "@app/modules/places/services/places.service";

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  dataPlaces: any[] = [];
  constructor( private router: Router,
               private _places: PlacesService) { }

  ngOnInit(): void {
    this.getDataPlaces();
  }

  getDataPlaces(){
    this._places.getPlaces().subscribe( {
      next: (data): void => {
        this.dataPlaces = data.results;
        console.log(this.dataPlaces)
      }
    })
  }

  placesDetail(id: number): void {
    this.router.navigateByUrl(`/places/${id}`).then();
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
