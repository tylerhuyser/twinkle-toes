const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    imgURL2: { type: String, required: true },
    imgURL3: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: Number, required: true }, //using function
    tag: { type: String, required: true },
    reviews: [{
        author: String,
        rating: Number,
        description: String
      }] // this will contain an object, within it is the username of the reviewer, star rating etc. 
  },
  { timestamps: true }
)

// Product.virtual('rating').get(function () {
//   let totalRating = 0
//   this.reviews.forEach(review => {
//     totalRating = totalRating + review.rating
//   })
//   return totalRating / this.review.length
// })

module.exports = mongoose.model('products', Product)               