import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    releaseYear: {
      type: Number,
      required: true
    },

    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0
    },

    director: {
      type:String,
      ref: "Director",
      // required: true
    },

    genres: [
      {
        type: String,
        ref: "Genre"
      }
    ],

    actors: [
      {
        type: String,
        ref: "Actor"
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Movie", MovieSchema);
