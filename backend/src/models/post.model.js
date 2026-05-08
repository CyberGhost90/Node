import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    decsription: {
      type: String,
      required: true,
      trim: true,
    },
    Age: {
      type: Number,
      required: true,
      min: 1,
      max: 150,
    },
  },
  {
    timestamps: true,
  },
);

export const Post = mongoose.model("Post", postSchema);
