import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      reqired: true,
    },
  },
  { timestamps: true }
);

export const bookModel = mongoose.model("book", bookSchema);
