import express from "express";
import { login, logout } from "../controller/authController.js";
import checkToken from "../middlewares/checkToken.js";

const router = express.Router();

router.post("/login", login);

router.post("/logout", checkToken, logout);

export default router;
