const Restaurant = require('../models/restaurant.model');

module.exports = {
  insert, get

};

function insert(restaurant) {
  return new Restaurant(restaurant).save();
}


async function get() {

  return Restaurant.find({}, function(err, restaurants) {

    let restaurantMap = {};

    restaurants.forEach(function(restaurant) {
      restaurantMap[restaurant._id] = restaurant;
    });

    console.log(restaurantMap);
    return restaurantMap;
  });
}
