import express from "express";
const router = express.Router();
import { getData, getDataApi } from "../models/models.js";


router.get("/:foodbank", async (req, res) => {
    let foodbank = req.params.foodbank;
    let url = `https://www.givefood.org.uk/api/2/foodbank/${foodbank}`;
    console.log(foodbank);
    const result = await getDataApi(url);
    console.log(result);
    res.json(result);
});


export default router;