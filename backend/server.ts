import express from "express";
import cors from "cors";
import "./config/dotenv.ts";

const app = express();
app.use(express.json());
app.use(cors({}));

const { PORT = 8080 } = process.env ?? { PORT: 8080 };

app.listen(PORT, () => {
  console.log("App is listening on port: " + PORT);
});
