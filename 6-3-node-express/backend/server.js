import express from "express";
import cors from "cors";
import morgan from "morgan";
import { getRandomQuote } from "./quotes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});

// TODO 7: Start server using app.listen
