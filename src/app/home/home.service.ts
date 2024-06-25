import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface CatFact {
  fact: any;
  length: any;
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiUrl = 'https://catfact.ninja/fact';

  constructor(private http: HttpClient) {}

  getCatFact(): Observable<CatFact> {
    return this.http.get<CatFact>(this.apiUrl);
  }
}
