import { Schema, model } from "mongoose";

let ProductSchema = new Schema({
  title: String,
  image: String,
  price: Number,
});

export let Model = new model("/products", ProductSchema);
