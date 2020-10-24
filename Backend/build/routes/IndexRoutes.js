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
        this.router.get('/categoria', IndexController_1.indexController.getCategoria);
        this.router.post('/categoria', IndexController_1.indexController.postCategoria);
        this.router.get('/clave', IndexController_1.indexController.getClave);
        this.router.post('/clave', IndexController_1.indexController.postClave);
        this.router.get('/producto', IndexController_1.indexController.getProducto);
        this.router.post('/producto', IndexController_1.indexController.postProducto);
        this.router.get('/pagina/:id', IndexController_1.indexController.getPagina);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
