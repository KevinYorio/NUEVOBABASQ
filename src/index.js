//dependencies
import express from "express";
import cors from "cors";
import ejs from "ejs";

//routes
import viewsRouter from "./routes/views.routes.js";
import authRouter from "./routes/auth.routes.js";
import reservesRouter from "./routes/reserves.routes.js";

//database config
import connectMongo from "./db/mongo.js"

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    //origin:"ellinkdelaapihosteada"
}));
app.use(express.static("src"))

//views config
app.engine('html', ejs.renderFile);
app.set('views', 'src/views');
app.set('view engine', 'html');

//routes
app.use("/", viewsRouter);
app.use("/api/auth", authRouter);
app.use("/api/reserves", reservesRouter);

//server on & db connection
app.listen(8080, () => { connectMongo() });