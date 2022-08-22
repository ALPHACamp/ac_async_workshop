const { users, restaurants } = require('../data')
const RestaurantModel = require('../restaurant')
const UserModel = require('../user')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurant_list_async_callback')
const db = mongoose.connection

db.once('open', () => {
<<<<<<< HEAD
  users.forEach((user, user_index) => {
    UserModel.create({
      ...user
    }).then((user) => {
      restaurants.forEach((restaurant, rest_index) => {
        if (rest_index >= 3 * user_index && rest_index < 3 * (user_index + 1)) {
          restaurant.userId = user._id
          RestaurantModel.create(restaurant)
        }
      })
      // restaurants.forEach((restaurant, rest_index)=>{
      //     if (rest_index >= 0 && rest_index < 3 && user_index === 0) {
      //         restaurant.userId = user._id
      //         RestaurantModel.create(restaurant)
      //     } else if (rest_index >= 3 && rest_index < 6 && user_index === 1) {
      //         restaurant.userId = user._id
      //         RestaurantModel.create(restaurant)
      //     }
      // })
    }).then(() => {
      console.log('done')
      if (user_index >= users.length - 1) {
        process.exit()
      }
=======
    users.forEach((user, user_index)=>{
        UserModel.create({
            ...user
        }).then((user)=>{
            restaurants.forEach((restaurant, rest_index)=>{
                if (rest_index >= 3*user_index && rest_index < 3*(user_index+1)) {
                    restaurant.userId = user._id
                    RestaurantModel.create(restaurant)
                }
            })
            // restaurants.forEach((restaurant, rest_index)=>{
            //     if (rest_index >= 0 && rest_index < 3 && user_index === 0) {
            //         restaurant.userId = user._id
            //         RestaurantModel.create(restaurant)
            //     } else if (rest_index >= 3 && rest_index < 6 && user_index === 1) {
            //         restaurant.userId = user._id
            //         RestaurantModel.create(restaurant)
            //     }
            // })
        }).then(()=>{
            UserModel.find().count(function (err, count) {
                if (err) console.log(err)
                else if (count >= users.length) {
                    console.log('done')
                    process.exit()
                }
            });
        })
>>>>>>> e2d26583c27f9b19a96c08cc1b0add8b05baab55
    })
  })
})
