import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Post {
  title: string;
  body: string;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  createPost(post: Post): Observable<any> {
    return this.http.post(this.apiUrl, post);
  }
}
