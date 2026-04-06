import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Backend is running");
});

// TODO 6.2: Create "/api/quote" route


// TODO 7: Start server using app.listen
