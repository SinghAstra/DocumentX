import cors from "cors";
import {} from "dotenv/config";
import express from "express";
import morgan from "morgan";
import connectDB from "./database/db.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.json({ message: "Auth Server is running." });
});

connectDB();

app.listen(8080, () => {
  console.log("Server connected to http://localhost:8080");
});
