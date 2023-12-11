import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpService} from "@app/core/services/http/http.service";

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private _http: HttpService) { }

  public getEpisodes(): Observable<any> {
    return this._http.get<any>('episode');
  }

  getEpisodePage(page: number): Observable<any> {
    return this._http.get(`/episode?page=${page}`);
  }
}
