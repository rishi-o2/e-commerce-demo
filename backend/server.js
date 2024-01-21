import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authroutes from "./routes/authroutes.js";
import CategoryRoutes from "./routes/CategoryRoutes.js";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Workaround for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authroutes);
app.use("/api/v1/category", CategoryRoutes);
app.use("/api/v1/product", ProductRoute);
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.use("/api/v1/auth", authroutes);
app.use("/api/v1/category", CategoryRoutes);
app.use("/api/v1/product", ProductRoute);
app.use(express.static(path.join(__dirname, './client/build')));

dotenv.config();

app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
