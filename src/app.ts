import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.routes";
import { connectToDatabaseWrapper } from "./config/database.config";

const { PORT, DOMAIN } = dotenv.config().parsed;
const app = express();

app.use(
  cors({
    origin: [DOMAIN],
  }),
);
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.text({ limit: "10mb" }));
app.use(express.json({ limit: "10mb" }));

routes.forEach((route) => app.use("/v1", route()));

app.get("/v1", (req, res) => {
  return res.json({
    message: "You just find a magical door, please leave it closed.",
  });
});

app.listen(PORT, async () => {
  try {
    await connectToDatabaseWrapper();
  } catch (error) {
    console.error("Error connecting to database:", error);
  }

  return console.log(`Express is listening at http://localhost:${PORT}`);
});
