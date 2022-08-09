import express from "express";
const router = express.Router();
import { getFoodbank } from "../models/models.js";
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
  let param = req.params.param;
  console.log("This is line 31", param);

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

  if (req.body.name !== undefined) {
    res.foodbank.name = req.body.name;
  }
  if (req.body.address !== undefined) {
    res.foodbank.address = req.body.address;
  }
  if (req.body.postcode !== undefined) {
    res.foodbank.postcode = req.body.postcode;
  }
  if (req.body.phone !== undefined) {
    res.foodbank.phone = req.body.phone;
  }
  if (req.body.email !== undefined) {
    res.foodbank.email = req.body.email;
  }
  if (req.body.imageUrl !== undefined) {
    res.foodbank.imageUrl = req.body.imageUrl;
  }
  if (req.body.needs !== undefined) {
    res.foodbank.needs = req.body.needs;
  }
  if (req.body.distance_mi !== undefined) {
    res.foodbank.distance_mi = req.body.distance_mi;
  }
  if (req.body.lat_lng !== undefined) {
    res.foodbank.lat_lng = req.body.lat_lng;
  }
  try {
    const updatedFoodbank = await res.foodbank.save();

    console.log("updatedFoodbank", updatedFoodbank);

    res.json(updatedFoodbank);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deleting one

router.delete("/:id", getFoodbank, async (req, res) => {
  try {
    await res.foodbank.remove();
    res.json({ message: "FoodBank has been deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;
