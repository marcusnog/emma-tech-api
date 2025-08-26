import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import { setupSwagger } from "./swagger";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

setupSwagger(app);

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/minhaapi";

mongoose.connect(mongoUrl)
  .then(() => {
    app.listen(3000, () =>
      console.log("🚀 Servidor rodando em http://localhost:3000\n📖 Docs em http://localhost:3000/api-docs")
    );
  })
  .catch(err => console.error(err));
