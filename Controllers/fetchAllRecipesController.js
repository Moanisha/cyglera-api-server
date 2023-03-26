const models = require("../models");
const Recipe = models.Recipe;

const fetchAllRecipesController = async (req, res) => {
    console.log("Inside Recipe controller")
    const recipeFound = await Recipe.findAll();
    res.send(recipeFound);
}

module.exports = fetchAllRecipesController;