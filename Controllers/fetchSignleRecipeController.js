const models = require("../models");
const Recipe = models.Recipe;

const fetchSingleRecipeController = async(req, res) => {
    console.log("inside singlerecipeController");
       const recipeName = req.body[0];
       console.log(recipeName);
    const singleRecipeFound = await Recipe.findOne({where: {recipeName}});
    res.send(singleRecipeFound);
}

module.exports = fetchSingleRecipeController;