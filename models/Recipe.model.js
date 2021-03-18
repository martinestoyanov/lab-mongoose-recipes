const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
  },
  ingredients: [String],
  cuisine: {
    type: String,
    required: true,
  },
  dishType: {
    type: String,
    enum: [
      "breakfast",
      "main_course",
      "soup",
      "snack",
      "drink",
      "dessert",
      "other",
    ],
  },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  duration: {
    type: Number,
    min: 0,
  },
  creator: {
    type: String,
  },
  created: {
    type: Date,
    default: function () {
      today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();

      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;
      return mm + "/" + dd + "/" + yyyy;
    },
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
