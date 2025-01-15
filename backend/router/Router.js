import { Controller } from "../controller/ProductController.js";
import express from "express";

export const route = express.Router();

route.get("/products", Controller.getAll);
route.get("/products/:id", Controller.getById);
route.delete("/products/:id", Controller.delete);
route.put("/products/:id", Controller.update);
route.post("/products", Controller.post);
