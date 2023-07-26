import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url_ = ' https://oumar.api.vinratechllp.com';
  constructor(private httpClient: HttpClient) {}
  getPosts() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/');
  }
  post_auth(slug: string, formData: any) {
    if (slug && formData) {
      return this.httpClient.post(this.url_ + slug, formData);
    } else {
      throw new Error("urls 's slug or data or both are missing !");
    }
  }
}
