import Express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import { route } from "./routes/route";


dotenv.config();
const server = Express();
server.use(Express.urlencoded({ extended: true }));
server.use(route);
server.set("view engine", "mustache");
server.engine("mustache", mustache());
server.set("views", path.join(__dirname, "views"));
server.use(Express.static(path.join(__dirname, "../public")));
server.listen(process.env.PORT);
