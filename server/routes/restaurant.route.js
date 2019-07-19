const express = require('express');
const restaurantCtrl = require('../controllers/restaurant.controller');

const router = express.Router();
module.exports = router;
const asyncHandler = require('express-async-handler');

router.route('/add-favorite').post(addFavourite);

function addFavourite(req, res) {
  restaurantCtrl.insert(req.body);
  res.json({"status": "success"});
}


router.route('/list').get(asyncHandler(list));

async function list(req, res) {
  let restaurants = await restaurantCtrl.get();
  res.json(restaurants);
}
