import {Injectable} from '@angular/core';
import {HttpService} from "@app/core/services/http/http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private _http: HttpService) {
  }

  public getCharacters(): Observable<any> {
    return this._http.get<any>('character');
  }

  public getCharactersId(ids: any): Observable<any> {
    return this._http.get<any>('character' + '/' + ids );
  }

  getCharactersPage(page: number): Observable<any> {
    return this._http.get(`/character?page=${page}`);
  }
}
