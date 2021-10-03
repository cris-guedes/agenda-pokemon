"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = __importDefault(require("express"));
const pageController = __importStar(require("../controller/pageController"));
const multer_1 = require("../multer");
const route = (0, express_1.default)();
exports.route = route;
route.get("/", pageController.pokeHomePage);
route.get("/create", pageController.pokeCreate);
route.get("/update/:id", pageController.pokeUpdate);
route.get("/search", pageController.search);
route.get("/api/save", pageController.save);
route.get("/api/desfazer", pageController.desfazer);
route.get("/api/:id", pageController.deletar);
route.post("/api/create", multer_1.uploadHandler.single('file'), pageController.create);
route.post("/api/update", multer_1.uploadHandler.single('file'), pageController.update);
route.get("/searchTipo", pageController.searchTipo);
