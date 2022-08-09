import mongoose from "mongoose";

const foodBankSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  postcode: { type: String },
  phone: { type: String },
  email: { type: String },
  imageUrl: { type: String },
  needs: [{ type: String }],
  distance_mi: { type: Number },
  lat_lng: { type: String },
});

export default mongoose.model("FoodBanks", foodBankSchema);
