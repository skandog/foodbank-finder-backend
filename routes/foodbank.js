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
    console.log("line 74", res.foodbank.name);
  }
  if (req.body.address !== undefined) {
    res.foodbank.address = req.body.address;
    console.log("line 78", res.foodbank.address);
  }
  if (req.body.postcode !== undefined) {
    res.foodbank.postcode = req.body.postcode;
    console.log("line 82", res.foodbank.postcode);
  }
  if (req.body.phone !== undefined) {
    res.foodbank.phone = req.body.phone;
    console.log("line 86", res.foodbank.phone);
  }

  if (req.body.email !== undefined) {
    res.foodbank.email = req.body.email;
    console.log("line 91", res.foodbank.email);
  }
  if (req.body.imageUrl !== undefined) {
    res.foodbank.imageUrl = req.body.imageUrl;
    console.log("line 95", res.foodbank.imageUrl);
  }
  if (req.body.needs !== undefined) {
    res.foodbank.needs = req.body.needs;
    console.log("line 99", res.foodbank.needs);
  }
  if (req.body.distance_mi !== undefined) {
    res.foodbank.distance_mi = req.body.distance_mi;
    console.log("line 103", res.foodbank.distance_mi);
  }
  if (req.body.lat_lng !== undefined) {
    res.foodbank.lat_lng = req.body.lat_lng;
    console.log("line 107", res.foodbank.lat_lng);
  }
console.log("sadwhef", res.foodbank);
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
    res.json({ messgae: "That record a gonna" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;
