"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const IndexController_1 = require("../controllers/IndexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.confing();
    }
    confing() {
        this.router.get('/', IndexController_1.indexController.index);
        this.router.post('/', IndexController_1.indexController.usuario);
        this.router.get('/pais', IndexController_1.indexController.getPais);
        this.router.post('/pais', IndexController_1.indexController.postPais);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
