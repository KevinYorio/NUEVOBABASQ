import { Router } from "express";
import authControllers from "../controllers/auth.controller.js"
import middlewares from "../utils/middlewares.js"

const authRouter = Router();

authRouter.get("/",middlewares.verifyToken, authControllers.getOneUser);

authRouter.post("/register", authControllers.register);

authRouter.post("/login", authControllers.login);

authRouter.put("/acceptCertificate",middlewares.verifyToken ,authControllers.acceptCertificate);

export default authRouter;

