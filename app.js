import express from "express";
import path from "path";
import mongoose from "mongoose";
import "dotenv/config";

import __dirname from "./dirname.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";

import itemsRouter from "./routes/items.js";
import foodbanksRouter from "./routes/foodbanks.js";
import foodbankRouter from "./routes/foodbank.js";
import dbo from "./db/conn.js";

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.uri, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database"));

app.use("/items", itemsRouter);
app.use("/foodbanks", foodbanksRouter);
app.use("/foodbank", foodbankRouter);

app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
});

// perform a database connection when the server starts
// dbo.connectToServer(function (err) {
//   if (err) {
//     console.error(err);
//     process.exit();
//   }
// });

export default app;
