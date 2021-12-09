import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { add } from "./utils/sum";

const app = express();

app.get("/", (req, res) => {
  const instance = process.env.INSTANCE;
  res.json({ message: "Hello, World!", instance });
});

app.get("/random", (req, res) => {
  const a = Math.random() * 100;
  const b = Math.random() * 100;
  const instance = process.env.INSTANCE;
  const result = add(a, b);
  res.json({ result, instance });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`[info] listening to port ${PORT}`);
});
