import { Injectable } from '@angular/core';
import { Pogoda } from './shared/pogoda';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KlientapiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Array<Pogoda>> {
    return this.http.get<Array<Pogoda>>("http://localhost:5277/api/weatherforecast");
  }
}
