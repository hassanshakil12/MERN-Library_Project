import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, DB_URL } from "./config.js";
import bookRoutes from "./routes/bookRoutes.js";
const app = express();

app.use(express.json());
app.use(cors());
// app.use(cors({
//   origin: "",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["content-type"]
// }))

app.get("/", (req, res) => {
  return res.status(200).send("MERN-Stack Library");
});

app.use("/books", bookRoutes);

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Database Connected...");
    app.listen(PORT, (err) => {
      err
        ? console.error(err)
        : console.log(`Serving at: http://localhost:${PORT}/`);
    });
  })
  .catch((err) => console.error(err));
