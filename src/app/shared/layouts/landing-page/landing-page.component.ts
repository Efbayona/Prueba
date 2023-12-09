import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
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
