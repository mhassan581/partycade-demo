import { Router } from "express";
import { signUp, login } from "../controller/authController.js";
import { checkAuth } from "../middleware/checkAuth.js";
import { checkBearer } from "../middleware/checkBearer.js";

export let authRouter = Router();

authRouter.route("/register").post([signUp]);
authRouter.route("/login").post([login]);
