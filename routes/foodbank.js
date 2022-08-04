import express from "express";
const router = express.Router();
import { getDataApi } from "../models/models.js";
import FoodBank from "../models/foodbank.js";

router.get("/:foodbank", async (req, res) => {
  let foodbank = req.params.foodbank;
  let url = `https://www.givefood.org.uk/api/2/foodbank/${foodbank}`;
  const result = await getDataApi(url);
  res.json(result);
});

// Getting all

router.get("/", async (req, res) => {
  try {
    const foodbanksData = await FoodBank.find();
    res.json(foodbanksData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
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

router.patch("/:id", (req, res) => {});

// Deleting one

router.delete("/:id", (req, res) => {});

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
