import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/minhaapi";

mongoose.connect(mongoUrl)
  .then(() => {
    app.listen(3000, () => console.log("🚀 Servidor rodando em http://localhost:3000"));
  })
  .catch(err => console.error(err));