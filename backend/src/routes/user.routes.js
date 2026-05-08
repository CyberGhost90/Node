import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";

const router = Router();
router.route("/register").post(registerUser); //route for user registration
router.route("/login").post(loginUser); //route for user login
router.route("/logout").post(logoutUser); //route for user logout

export default router;
