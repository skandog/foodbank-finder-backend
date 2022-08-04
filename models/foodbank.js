import mongoose from "mongoose";

const foodBankSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  needs: [{ type: String }],
});

export default mongoose.model("FoodBanks", foodBankSchema);
