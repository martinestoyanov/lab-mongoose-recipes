const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => { return self.connection.dropDatabase() })
  .then(() => {
    //Iteration #2
    // const personalRecipe = {
    //   title: "Cake",
    //   cuisine: "Bulgarian",
    // };
    //
    // Recipe.create(personalRecipe)
    //   .then((recipe) => {
    //     console.log(`${recipe.title} has been added to the DB!`);
    //   })
    //   .catch((err) => console.log(err));

    //Iteration #3
    Recipe.insertMany(data)
    .catch((err) => console.log(err)) //Maybe move down?
  
      // .then((newData) => {
      //   newData.forEach((eachData) => {
      //     console.log(`${eachData.title} has been added to the DB!`)
      //   })
      // })

      //Iteration #4
      .then(() => {
        Recipe.findOneAndUpdate(
          { title: "Rigatoni alla Genovese" },
          { duration: 100 }
        )
          .then(() => console.log(`Recipe has been updated!`))
          .catch((err) => console.log(err))
      })
  
    
    
    
      .catch((error) => {
        console.error("Error connecting to the database", error)
      }
    })
