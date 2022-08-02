import { MongoClient, ServerApiVersion } from "mongodb";
import "dotenv/config";
import fetch from "node-fetch";

const uri = process.env.uri;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

export async function getData(callback) {
  client.connect(async (err, db) => {
    if (err) throw err;
    const collection = client.db("myFirstDatabase").collection("users");
    // .find({ name: "skandy" })
    // .toArray(function (err, result) {
    //   if (err) throw err;
    //   console.log(result);
    //   db.close();
    // });

    const results = await collection.find({ name: "camilla" }).toArray();

    // console.log("results (model) :>> ", results); // perform actions on the collection object
    // client.close();
    return callback(results);
  });
}

export let resultData = getData(function (results) {
  console.log("results (new) :>> ", results);
});

// console.log(resultData)

export const getDataApi = async (url) => {
  const response = await fetch(url);

  const data = await response.json();

  //dev feedback only remove
  console.log(`data in func >>>`, data);

  return data;
};
