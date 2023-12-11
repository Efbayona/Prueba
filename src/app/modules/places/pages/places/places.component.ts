import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PlacesService} from "@app/modules/places/services/places.service";

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  dataPlaces: any[] = [];
  currentPage: number = 1;
  searchTerm = '';

  constructor(private router: Router,
              private _places: PlacesService) {
  }

  ngOnInit(): void {
    this.getDataPlaces();
    this.loadPlaces();
  }

  getDataPlaces() {
    this._places.getPlaces().subscribe({
      next: (data): void => {
        this.dataPlaces = data.results;
      }
    })
  }


  loadPlaces(): void {
    this._places.getLocationsPage(this.currentPage, this.searchTerm).subscribe({
      next: (data): void => {
        this.dataPlaces = data.results;
      }, error(error) {
        console.log('No hay mas datos');
      }
    });
  }

  onSearchChange(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.loadPlaces();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadPlaces();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.onPageChange(this.currentPage - 1);
    }
  }

  nextPage(): void {
    this.onPageChange(this.currentPage + 1);
  }

  placesDetail(id: number): void {
    this.router.navigateByUrl(`/places/${id}`).then();
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
