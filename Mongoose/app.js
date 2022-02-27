const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fruitDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"]

    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

// const fruit = new Fruit({
//     name: "mango",
//     rating: 9,
//     review: "nice one"
// });

// fruit.save();
const pineapple = new Fruit({
    name: "pineapple",
    rating: 10,
    review: "great fruit"
});
pineapple.save();

const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model('Person', PersonSchema);
const person = new Person({
    name: "rahul",
    age: 29,
    favouriteFruit: pineapple
});
person.save();

// const Apple = new Fruit({
//     name: "Apple",
//     score: 8,
//     review: "Great Fruit"
//   });
//   const Orange = new Fruit({
//     name: "Orange",
//     score: 6,
//     review: "Sweet & Sour"
//   });
//     const Banana = new Fruit({
  
//     name: "Banana",
//     score: 9,
//     review: "Great Stuff"
//   });

// Fruit.insertMany([Apple, Orange, Banana], function(err, result) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(result);
//     }
//   });

// fruit.save();


// Fruit.find(function(err, fruits) {
//     if (err) {
//       console.log(err);
//     } else {
//       mongoose.connection.close();
//     //   console.log(fruits);
      
//       fruits.forEach(function(fruit) {
//         console.log(fruit.name)
//     });
//     }
//   });

Fruit.updateOne({_id: "621bc93183fb8c51c3f2d269"}, {name: "peach"}, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully updated");
    }
  });
  Fruit.deleteOne({_id: "621bc93183fb8c51c3f2d269"}, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully deleted");
    }
  });