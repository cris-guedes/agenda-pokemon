import Express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import  mainRouters  from "./routes/route";
import apiRouters from "./routes/apiRoute";
dotenv.config();

const server = Express();
server.use(Express.urlencoded({ extended: true }));
server.use([mainRouters,apiRouters]);
server.set("view engine", "mustache");
server.engine("mustache", mustache());
server.set("views", path.join(__dirname, "../views"));
server.use(Express.static(path.join(__dirname, "../public")));
server.listen(process.env.PORT);

