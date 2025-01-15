import { Model } from "../model/Model.js";

export let Controller = {
  getAll: async (req, res) => {
    let product = await Model.find();
    res.send(product);
  },
  getById: async (req, res) => {
    let { id } = req.params;
    let product = await Model.findById(id);
    res.send(product);
  },
  delete: async (req, res) => {
    let { id } = req.params;
    await Model.findByIdAndDelete(id);
    res.send({
      message: "Successfully deleted",
    });
  },
  post: async (req, res) => {
    let newProduct = Model(req.body);
    await newProduct.save();
    res.send({
      message: "Successfully posted",
    });
  },
  update: async (req, res) => {
    let { id } = req.params;
    let product = Model(req.body);
    await Model.findByIdAndUpdate({ _id: id }, product, { new: true });
    res.send(req.body);
  },
};
