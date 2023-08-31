import express from "express";
import { userService } from "../services/usersService.js";
const router = express.Router();
const service = new userService();

router.get("/", (req, res) => {
  const users = service.allUsers();
  res.json(users);
});

router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const user = service.findUser(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res) => {
  const body = req.body;
  const user = service.createUser(body);
  res.json(user);
});

router.patch("/:id", (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const user = service.updateUser(id, body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const rta = service.deleteUser(id);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

export { router };
