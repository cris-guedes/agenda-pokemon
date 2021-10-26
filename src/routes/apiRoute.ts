import Router from "express";
import * as apiController from "../controller/apiControllers";
import { uploadHandler } from "../multer";
const apiRouters = Router()

apiRouters.get("/api/save", apiController.save);
apiRouters.get("/api/desfazer", apiController.desfazer)
apiRouters.get("/api/:id", apiController.deletar)
apiRouters.post("/api/create",uploadHandler.single('file'),apiController.create)
apiRouters.post("/api/update",uploadHandler.single('file'),apiController.update)
apiRouters.get("/searchTipo", apiController.searchTipo);


export default apiRouters;