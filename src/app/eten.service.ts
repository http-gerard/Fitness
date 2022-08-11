import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtenService {

  private url = 'www.themealdb.com/api/json/v1/1/search.php?f=a';

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(this.url);
  }
}
