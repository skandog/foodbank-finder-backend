import express from "express";
const router = express.Router();
import { getDataApi } from "../models/models.js";
let url = `https://www.givefood.org.uk/api/2/`;
import { parcelArray } from "../models/serve.js";
// This route talks only to GiveFood API

router.get("/", async (req, res) => {
  let route = url + "foodbanks";

  const result = await getDataApi(route);
  let finalResult = parcelArray(result);

  res.json({ success: true, payload: finalResult });
});

router.get("/search/:address", async (req, res) => {
  let address = req.params.address;
  try {
    let route = url + `foodbanks/search/?address=${address}`;

    const result = await getDataApi(route);

    const finalResult = parcelArray(result)

    res.json({ success: true, payload: finalResult });
    console.log("1st :>> ");
  } catch {
    try {
      let route = url + `foodbank/${address}/`;

      const result = await getDataApi(route);

      const finalResult = parcelArray([result])
      res.json({ success: true, payload: finalResult });
      console.log("2nd :>> ");
    } catch (error) {
      res.json({ success: false, message:
        "I am so sorry, there doesnt seem to be any results here. Please could you try another search term?" }
      );
      console.log(error);
    }
  }
});

export default router;
