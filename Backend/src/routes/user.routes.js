import { Router } from "express";
import { deleteUser, getUsers, signIn, signUp, updateNameUser } from "../controllers/users.controller.js";

const router = Router();

router.post("/sign/up", signUp);
router.post("/sign/in", signIn);
router.get("/get/all", getUsers);
router.patch("/update/name", updateNameUser);
router.delete("/delete/:email", deleteUser);

export default router;