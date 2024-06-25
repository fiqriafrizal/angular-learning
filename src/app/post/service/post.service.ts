import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  sendPostRequest(data: any): Observable<any> {
    return this.http.post<any>(
      'https://jsonplaceholder.typicode.com/posts',
      data
    );
  }
}
