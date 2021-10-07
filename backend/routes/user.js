import express, { Router } from "express";
const route = express.Router();
import {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

route.get("/", getUsers);
route.get("/:id", getUserById);
route.post("/", addUser);
route.put("/:id", updateUser);
route.delete("/:id", deleteUser);

export default route;
