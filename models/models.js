import { MongoClient, ServerApiVersion } from "mongodb";
import "dotenv/config";
import fetch from "node-fetch";
import FoodBank from "./foodbank.js";

const uri = process.env.uri;

export const getDataApi = async (url) => {
  const response = await fetch(url);

  const data = await response.json();

  //dev feedback only remove

  return data;
};

export async function getFoodbank(req, res, next) {
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
