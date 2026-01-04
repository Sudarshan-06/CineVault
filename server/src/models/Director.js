import mongoose from "mongoose";

const DirectorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
      trim: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Director", DirectorSchema);
