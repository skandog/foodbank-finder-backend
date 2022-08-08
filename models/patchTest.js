export const controller = {
  updateFoodbank (req, res, next) {
    foodbank.findOne({ name: req.params.name }).exec()
    .then((result) => {
      result.firstName = req.body.firstName;
      result.save();
      res.foodbank = result;
      next();
    })
  },
}