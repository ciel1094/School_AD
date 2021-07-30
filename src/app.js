import express from "express";
import bodyparser from "body-parser";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import adminRouter from "./routers/adminRouter";
import connect from "../db";

const app = express();
const PORT = process.env.PORT;

connect();

app.set("view engine", "pug");

app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/", globalRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`${PORT} server start`);
});