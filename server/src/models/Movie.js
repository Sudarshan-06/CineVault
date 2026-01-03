const mongoose = require("mongoose");

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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Director",
      required: true
    },

    genres: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genre"
      }
    ],

    actors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Actor"
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
