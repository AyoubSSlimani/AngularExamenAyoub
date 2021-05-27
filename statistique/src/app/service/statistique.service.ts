import { Injectable } from '@angular/core';
import { Statistique } from '../models/statistique';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StatistiqueService {
  private readonly API_URL = 'https://stats.naminilamy.fr/';

  public tabStatistique: Statistique[] = [];

  constructor(private http: HttpClient) {}

  getStatistique(): Promise<Statistique[]> {
    return this.http
      .get('https://stats.naminilamy.fr/')
      .toPromise()
      .then((obj: any) => {
        for (let o of obj) {
          this.tabStatistique.push(
            new Statistique(o.appreciation, o.value, o.title, o.updatedAt)
          );
        }
        return this.tabStatistique;
      });
  }
}
