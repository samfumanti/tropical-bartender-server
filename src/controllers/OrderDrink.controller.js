const DrinkListService = require('../services/DrinkList.service');

module.exports = (req, res) => {
  const drink = req.body;
  drink.timestamp = new Date().getTime();
  DrinkListService.addDrink(drink);
  console.log(`drink ordered: ${JSON.stringify(drink)}`);
  res.json(drink);
}
