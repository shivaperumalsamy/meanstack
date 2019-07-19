import {Component, Input, OnInit} from '@angular/core';
import {RestaurantsService} from '../restaurants.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {

  @Input() restaurant: Object;

  constructor(private restaurantsService: RestaurantsService) {
  }

  ngOnInit() {
  }

  addFavorite() {
    console.log('event');
    this.restaurantsService.addFavourite(this.restaurant).subscribe(data => {
      console.log(data);
    });
  }

}
