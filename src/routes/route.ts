import { Router } from "express";
import  * as pageController  from "../controller/pageController";

const mainRouters = Router();

mainRouters.get("/",pageController.pokeHomePage);
mainRouters.get("/create",pageController.pokeCreate);
mainRouters.get("/update/:id",pageController.pokeUpdate);
mainRouters.get("/search",pageController.search);





export default mainRouters;