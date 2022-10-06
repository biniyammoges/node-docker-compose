import colors from "colors";
import express from "express";
import { config } from "dotenv";

import { connectDb } from "./config/db.js";

config({ path: ".env" });
connectDb();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world from docker and I love you man..");
});

console.log("Docker running successfully!..");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server  started on port ${PORT}`.cyan.underline.bold)
);
