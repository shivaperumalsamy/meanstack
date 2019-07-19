import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  url = 'https://developers.zomato.com/api/v2.1/search?lat=13.0827%C2%B0%20N&lon=80.2707%C2%B0%20E&count=10';
  addFavouriteUrl = '/api/restaurant/add-favorite';
favoriteData: object;

  constructor(private http: HttpClient) {
  }

  header = new HttpHeaders({
    'user-key': 'aa8d8b61690b3ae9fbe1fafbb8162038',
  });

  getRestaurants(): Observable<any> {

    return this.http.get<any>(this.url, {
      headers: this.header
    });
  }

  addFavourite(restaurant: any): Observable<any> {
    this.favoriteData = {};
    this.favoriteData['name'] = restaurant.name;
    this.favoriteData['thumb'] = restaurant.thumb;
    this.favoriteData['location'] = restaurant.location;

   return this.http.post<any>(this.addFavouriteUrl, this.favoriteData);
  }

}
