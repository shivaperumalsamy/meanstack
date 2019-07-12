import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  url = "https://developers.zomato.com/api/v2.1/search?lat=13.0827%C2%B0%20N&lon=80.2707%C2%B0%20E&count=10";
  header: any;
  constructor(private http: HttpClient) {

  }
  getRestaurants(): Observable<any> {

    this.header = new HttpHeaders({
      'user-key': 'aa8d8b61690b3ae9fbe1fafbb8162038',
    });
    return this.http.get<any>(this.url, {
      headers: this.header
    })
  }
}
