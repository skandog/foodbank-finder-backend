import express from "express";
const router = express.Router();
import { getDataApi } from "../models/models.js";
import FoodBank from "../models/foodbank.js";
import foodbank from "../models/foodbank.js";

// DONT DELETE WE NEED THIS LOL

// router.get("/:foodbank", async (req, res) => {
//   let foodbank = req.params.foodbank;
//   let url = `https://www.givefood.org.uk/api/2/foodbank/${foodbank}`;
//   const result = await getDataApi(url);
//   res.json(result);
// });

// Getting all

router.get("/", async (req, res) => {
  try {
    const foodbanksData = await FoodBank.find();
    res.json(foodbanksData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get by id

router.get("/:id", getFoodbank, (req, res) => {
  res.json(res.foodbank);
});

// Creating One

router.post("/", async (req, res) => {
  const foodbank = new FoodBank({
    name: req.body.name,
    address: req.body.address,
    needs: req.body.needs,
  });
  try {
    const newFoodBank = await foodbank.save();
    res.status(201).json(newFoodBank);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating one

router.patch("/:id", getFoodbank, async (req, res) => {
  if (req.body.name !== null) {
    res.foodbank.name = req.body.name;
  }
  if (req.body.address !== null) {
    res.foodbank.address = req.body.address;
  }

  try {
    const updatedFoodbank = await res.foodbank.save();
    res.json(updatedFoodbank);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deleting one

router.delete("/:id", getFoodbank, async (req, res) => {
  try {
    await res.foodbank.remove();
    res.json({ messgae: "That record a gonna" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getFoodbank(req, res, next) {
  let foodbank;
  try {
    foodbank = await FoodBank.findById(req.params.id);
    if (foodbank === null) {
      return res.status(404).json({ message: "Cannot find foodbank" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.foodbank = foodbank;
  next();
}

// router.post("/", async (req, res)=>{
//     let body = req.params.body;
//     insertInto({body})
// })
/*
router.post("/", (req, res) => {
  const dbConnect = dbo.getDb();
  const matchDocument = req.body;
  dbConnect
    .collection("FoodBanks")
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        res.status(400).send("Error inserting foodbank!");
      } else {
        console.log(`Added a new match with name ${result.insertedId}`);
        res.status(204).send();
      }
    });
});
*/

export default router;
