import  Router, { Request, response, Response }  from "express";
import  * as pageController  from "../controller/pageController";
import { uploadHandler } from "../multer";

const route = Router();

route.get("/",pageController.pokeHomePage);
route.get("/create",pageController.pokeCreate);
route.get("/update/:id",pageController.pokeUpdate);
route.get("/search",pageController.search);


route.get("/api/save", pageController.save);
route.get("/api/desfazer", pageController.desfazer)
route.get("/api/:id", pageController.deletar)
route.post("/api/create",uploadHandler.single('file'),pageController.create)
route.post("/api/update",uploadHandler.single('file'),pageController.update)
route.get("/searchTipo", pageController.searchTipo);


export {route}