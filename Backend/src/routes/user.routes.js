import { Router } from "express";
import { signUp } from "../controllers/users.controller.js";

const router = Router();

router.post("/signUp", signUp);

export default router;