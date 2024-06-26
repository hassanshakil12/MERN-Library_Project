import express from "express";
import { bookModel } from "../models/books.model.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const book = await bookModel.find({});
    const books = { length: book.length, data: book };

    return res.status(200).json(books);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel.findById(id);

    return res.status(200).json(book);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    if (!title || !author || !publishYear) {
      return res
        .status(400)
        .send({ Error: "Please send all fields, Title, Author, PublishYear" });
    }

    const newBook = { title: title, author: author, publishYear: publishYear };
    const book = await bookModel.create(newBook);

    return res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      return res.send(400).send({
        message: "Please send all fields, Title, Author, PublishYear",
      });
    }

    const data = { title: title, author: author, publishYear: publishYear };

    const result = await bookModel.findByIdAndUpdate(id, data);
    if (!result) res.status(400).send({ message: "Book not found" });

    return res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel.findByIdAndDelete(id);
    if (!book) return res.status(400).send("Book Not Found");

    return res
      .status(200)
      .send({ message: "Book Deleted Successfully", book: book });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
});

export default router;
