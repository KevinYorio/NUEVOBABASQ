import { Router } from "express";
import reserveControllers from "../controllers/reserves.controller.js"
import middlewares from "../utils/middlewares.js"

const reserveRoute = Router();

reserveRoute.post("/",middlewares.verifyToken, reserveControllers.createOne);

export default reserveRoute;

