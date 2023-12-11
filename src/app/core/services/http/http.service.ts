import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {
  }

  public get<T>(endpoint: string): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get<T>(url);
  }

  public post<T, R>(endpoint: string, body: T): Observable<R> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post<R>(url, body);
  }

  public put<T, R>(endpoint: string, body: T): Observable<R> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.put<R>(url, body);
  }

  public delete<R>(endpoint: string): Observable<R> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.delete<R>(url);
  }
}

