import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from '../interfaces/Match.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getPartidosRonda1() {
    return this.http.get<Match[]>('http://localhost:3000/fixturesRonda1');
  }
  getPartidosRonda(ronda: string) {
    switch (ronda) {
      case 'Group Stage - 1':
        return this.http.get<Match[]>(`${this.url}/fixturesRonda1`);
      case 'Group Stage - 2':
        return this.http.get<Match[]>(`${this.url}/fixturesRonda2`);
      case 'Group Stage - 3':
        return this.http.get<Match[]>(`${this.url}/fixturesRonda3`);
      case '8th Finals':
        return this.http.get<Match[]>(`${this.url}/fixturesOctavos`);
      case 'Quarter-finals':
        return this.http.get<Match[]>(`${this.url}/fixturesCuartos`);
      case 'Semi-finals':
        return this.http.get<Match[]>(`${this.url}/fixturesSemi`);
      case '3rd Place Final':
        return this.http.get<Match[]>(`${this.url}/fixturesTercerPuesto`);
      case 'Final':
        return this.http.get<Match[]>(`${this.url}/fixturesFinal`);
    }
  }
}
