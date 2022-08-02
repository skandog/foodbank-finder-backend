import { MongoClient, ServerApiVersion } from "mongodb";
import "dotenv/config";

const uri = process.env.uri;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect(async (err, db) => {
  if (err) throw err;
  const collection = client.db("myFirstDatabase").collection("users");
  // .find({ name: "skandy" })
  // .toArray(function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });

  const results = await collection
    .find({ name: "camilla" })
    
    .toArray();

  console.log("results :>> ", results); // perform actions on the collection object
  client.close();
});
