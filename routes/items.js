import express from "express";
const router = express.Router();
import { getData, getDataApi } from "../models/models.js";

/* GET users listing. */
router.get("/", async function (req, res, next) {
  // const result = await getDataApi(
  //   "https://www.givefood.org.uk/api/2/foodbank/vauxhall"
  // );

  let resultData = await getData(function (results) {
    console.log("results (moved) :>> ", results);
    res.json(results);
  });

  // let result = await resultData;
  // // res.json({ message: "I wish we had some information to give you ☹️" });
  // console.log("result (route):>> ", result);
});

export default router;
