import express from "express";
const router = express.Router();
import { getDataApi } from "../models/models.js";
let url = `https://www.givefood.org.uk/api/2/`;
import { parcelFoodbanks } from "../models/serve.js";
// This route talks only to GiveFood API

router.get("/", async (req, res) => {
  let route = url + "foodbanks";

  const result = await getDataApi(route);
  let finalResult = parcelFoodbanks(result);

  res.json(result);
});

router.get("/search/:address", async (req, res) => {
  let address = req.params.address;
  try {
    let route = url + `foodbanks/search/?address=${address}`;

    const result = await getDataApi(route);
    res.json(result);
    console.log("1st :>> ");
  } catch {
    try {
      let route = url + `foodbank/${address}/`;

      const result = await getDataApi(route);
      res.json(result);
      console.log("2nd :>> ");
    } catch (error) {
      res.json(
        "I am so sorry, there doesnt seem to be any results here. Please could you try another search term?"
      );
      console.log(error);
    }
  }
});

export default router;
