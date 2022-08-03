import express from "express";
const router = express.Router();
import { getData, getDataApi } from "../models/models.js";

router.get("/", async (req, res) => {
  let url = "https://www.givefood.org.uk/api/2/foodbanks";

  const result = await getDataApi(url);
  res.json(result);
});

export default router;
