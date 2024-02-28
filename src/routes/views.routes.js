import { Router } from "express";
import viewsControllers from "../controllers/views.controllers.js";

const viewsRouter = Router();

viewsRouter.get("/", viewsControllers.index);
viewsRouter.get("/alumno", viewsControllers.alumno);
viewsRouter.get("/clases", viewsControllers.clases);
viewsRouter.get("/login", viewsControllers.login);
viewsRouter.get("/registro", viewsControllers.registro);
viewsRouter.get("/sobrenosotros", viewsControllers.sobrenosotros);
viewsRouter.get("/pay", viewsControllers.pay);

export default viewsRouter;