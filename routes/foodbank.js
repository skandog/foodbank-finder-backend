import express from "express";
const router = express.Router();
import { getDataApi } from "../models/models.js";
import FoodBank from "../models/foodbank.js";
import mongoose from "mongoose";
// import foodbank from "../models/foodbank.js";

// This route talks only to our database on MongoDB

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

// Get by query search

router.get("/search/:param", (req, res) => {
  let param = req.params.query;
  console.log(param);

  let query = {};

  try {
    let id = mongoose.mongo.ObjectId(param);
    query = { id: id };
  } catch {
    query = { name: param };
  }

  console.log("query :>> ", query);

  FoodBank.findOne(query, function (err, obj) {
    res.send(obj);
    console.log(obj);
  });
});

// Creating One

router.post("/", async (req, res) => {
  const foodbank = new FoodBank(
    // name: req.body.name,
    // address: req.body.address,
    // needs: req.body.needs,
    req.body
  );
  try {
    const newFoodBank = await foodbank.save();
    res.status(201).json(newFoodBank);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating one

router.patch("/:id", getFoodbank, async (req, res) => {
  console.log("this is res.foodbank", res.foodbank);
  console.log("this is req.body", req.body);
  if (req.body.name !== null) {
    res.foodbank.name = req.body.name;
    console.log("line 74", res.foodbank);
  }
  if (!req.body.address) {
    res.foodbank.address = req.body.address;
    console.log("line 78", res.foodbank);
  }
  if (req.body.postcode !== null) {
    res.foodbank.postcode = req.body.postcode;
    console.log("line 82", res.foodbank);
  }
  if (req.body.phone !== null) {
    res.foodbank.phone = req.body.phone;
    console.log("line 86", res.foodbank);
  }

  if (req.body.email !== null) {
    res.foodbank.email = req.body.email;
    console.log("line 91", res.foodbank);
  }
  if (req.body.imageUrl !== null) {
    res.foodbank.imageUrl = req.body.imageUrl;
    console.log("line 95", res.foodbank);
  }
  if (req.body.needs !== null) {
    res.foodbank.needs = req.body.needs;
    console.log("line 99", res.foodbank);
  }
  if (req.body.distance_mi !== null) {
    res.foodbank.distance_mi = req.body.distance_mi;
    console.log("line 103", res.foodbank);
  }
  if (req.body.lat_lng !== null) {
    res.foodbank.lat_lng = req.body.lat_lng;
    console.log("line 107", res.foodbank);
  }
console.log("sadwhef", res.foodbank);
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

export default router;
