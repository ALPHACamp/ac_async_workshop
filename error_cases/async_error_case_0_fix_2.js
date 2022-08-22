const { users, restaurants }  = require('../data')
const RestaurantModel = require('../restaurant')
const UserModel = require('../user')
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/restaurant_list_async_callback")
const db = mongoose.connection

db.once('open', () => {
    const usersRestaurant = []
    UserModel.create(users, (err, users)=>{
        users.forEach((user, user_index)=>{
            restaurants.forEach((restaurant, rest_index)=>{
                if (rest_index >= 3*user_index && rest_index < 3*(user_index+1)) {
                    restaurant.userId = user._id
                    usersRestaurant.push(restaurant)
                    console.log('data prepared')
                }
            })
        })
        RestaurantModel.create(usersRestaurant, ()=>{
            console.log('done')
            process.exit()
        })
    })
})