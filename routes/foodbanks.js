import express from "express";
const router = express.Router();
import { getDataApi } from "../models/models.js";

router.get("/", async (req, res) => {
  let url = "https://www.givefood.org.uk/api/2/foodbanks";

  const result = await getDataApi(url);
  res.json(result);
});

router.get("/search/:address", async (req, res) => {
  let address = req.params.address;
  let url = `https://www.givefood.org.uk/api/2/foodbanks/search/?address=${address}`;

  const result = await getDataApi(url);
  res.json(result);
});

export default router;
