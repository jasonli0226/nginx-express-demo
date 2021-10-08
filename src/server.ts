import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

app.get("/", (req, res) => {
  const instance = process.env.INSTANCE;
  res.json({ message: "Hello, World!", instance });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`[info] listening to port ${PORT}`);
});
