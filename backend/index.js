import express from "express";
import cors from "cors";

import { route } from "./router/Router.js";
import "./config/config.js";
const app = express();
app.use(cors());
app.use(express.json());
app.listen(5000, () => console.log("Listening at port 5000"));
app.use(route);
