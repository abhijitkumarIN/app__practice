import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://dummyjson.com/products';

  constructor(private httpClient: HttpClient) { }
  getPosts(){
    return this.httpClient.get(this.url);
  }
}
