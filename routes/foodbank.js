import express from "express";
const router = express.Router();
import { getData, getDataApi, insertInto } from "../models/models.js";
import dbo from "../db/conn.js";

router.get("/:foodbank", async (req, res) => {
  let foodbank = req.params.foodbank;
  let url = `https://www.givefood.org.uk/api/2/foodbank/${foodbank}`;
  const result = await getDataApi(url);
  res.json(result);
});

// router.post("/", async (req, res)=>{
//     let body = req.params.body;
//     insertInto({body})
// })

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



export default router;
