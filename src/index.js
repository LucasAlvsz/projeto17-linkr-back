/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "dotenv/config";

dotenv.config();

import routes from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.get("/", async (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT || 5000, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port ${process.env.PORT || 5000} 🐱‍👤`);
});
