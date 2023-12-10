import { Injectable } from '@angular/core';
import {HttpService} from "@app/core/services/http/http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private _http: HttpService) { }

  public getPlaces(): Observable<any> {
    return this._http.get<any>('location');
  }
}
