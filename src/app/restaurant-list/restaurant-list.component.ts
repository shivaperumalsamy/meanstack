import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  restaurantList : any;

  constructor(private restaurantService:RestaurantsService) { }

  ngOnInit() {
    this.getRestaurants();
  }
  getRestaurants():void{
   this.restaurantService.getRestaurants().subscribe(list =>{
    this.restaurantList = list.restaurants;
     console.log(this.restaurantList);
   } );
   
  }

}
