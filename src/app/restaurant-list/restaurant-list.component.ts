import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {


  restaurantList : Object[] = [
    {
      "name":"Fassos",
      "url":"https://b.zmtcdn.com/data/pictures/chains/5/65155/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      "locality":"Besant Nagar"
    },
    {
      "name":"Domino's",
      "url":"https://b.zmtcdn.com/data/pictures/chains/5/65155/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      "locality":"Adyar"
    },
    {
      "name":"Hot Chips",
      "url":"https://b.zmtcdn.com/data/pictures/chains/5/65155/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      "locality":"Thiruvamiyur"
    },
    {
      "name":"Foodie",
      "url":"https://b.zmtcdn.com/data/pictures/chains/5/65155/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      "locality":"Adyar"
    },
    {
      "name":"Foodie",
      "url":"https://b.zmtcdn.com/data/pictures/chains/5/65155/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      "locality":"Adyar"
    },{
      "name":"Foodie",
      "url":"https://b.zmtcdn.com/data/pictures/chains/5/65155/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      "locality":"Adyar"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
