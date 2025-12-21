import express from "express";
import { cartController } from "../controllers/cart.controller.js";

const cartRouter = express.Router();

// Tạo route CRUD
cartRouter.post("/", cartController.create);
cartRouter.get("/", cartController.findAll);
cartRouter.get("/:id", cartController.findOne);
cartRouter.patch("/:id", cartController.update);
cartRouter.delete("/:id", cartController.remove);

export default cartRouter;
