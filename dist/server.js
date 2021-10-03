"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const path_1 = __importDefault(require("path"));
const route_1 = require("./routes/route");
dotenv_1.default.config();
const server = (0, express_1.default)();
server.use(express_1.default.urlencoded({ extended: true }));
server.use(route_1.route);
server.set("view engine", "mustache");
server.engine("mustache", (0, mustache_express_1.default)());
server.set("views", path_1.default.join(__dirname, "views"));
server.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
server.listen(process.env.PORT);
