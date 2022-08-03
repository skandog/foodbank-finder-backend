import express from "express";
const router = express.Router();
import { getData, getDataApi, insertInto } from "../models/models.js";


router.get("/:foodbank", async (req, res) => {
    let foodbank = req.params.foodbank;
    let url = `https://www.givefood.org.uk/api/2/foodbank/${foodbank}`;
    console.log(foodbank);
    const result = await getDataApi(url);
    console.log(result);
    res.json(result);
});

router.post("/", async (req, res)=>{
    let body = req.params.body;
    insertInto({body})
})

export default router;