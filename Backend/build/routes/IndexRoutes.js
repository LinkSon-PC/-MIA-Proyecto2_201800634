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
        this.router.put('/', IndexController_1.indexController.putUsuario);
        this.router.get('/login/:usuario/:pass', IndexController_1.indexController.BuscarUsuario);
        this.router.get('/login/:id', IndexController_1.indexController.getUsuario);
        this.router.get('/pais', IndexController_1.indexController.getPais);
        this.router.post('/pais', IndexController_1.indexController.postPais);
        this.router.get('/categoria', IndexController_1.indexController.getCategoria);
        this.router.post('/categoria', IndexController_1.indexController.postCategoria);
        this.router.get('/clave', IndexController_1.indexController.getClave);
        this.router.post('/clave', IndexController_1.indexController.postClave);
        //PUBLICACIONES DEL USUARIO
        this.router.get('/publicacion', IndexController_1.indexController.getProducto);
        this.router.get('/publicacion/:id', IndexController_1.indexController.getPublicacion);
        this.router.get('/carrito/cabezera/:id', IndexController_1.indexController.getCarro);
        this.router.get('/carrito/:id', IndexController_1.indexController.getDetalle_Carro);
        this.router.delete('/carrito/:id', IndexController_1.indexController.deleteCarrito);
        this.router.post('/carrito', IndexController_1.indexController.postCarrito);
        //PRODUCTOS PARA COMPRAR
        this.router.get('/reestablecer/:correo', IndexController_1.indexController.Reestablecer_Correo);
        this.router.put('/reestablecer/contrasena/:id', IndexController_1.indexController.Reestablecer_Contrasena);
        this.router.put('/confirmar/:id', IndexController_1.indexController.Confirmar_Usuario);
        this.router.put('/compra/:id', IndexController_1.indexController.Compra);
        this.router.put('/venta/:id', IndexController_1.indexController.Venta);
        this.router.get('/producto', IndexController_1.indexController.getProducto);
        this.router.post('/producto', IndexController_1.indexController.postProducto);
        this.router.post('/buscar', IndexController_1.indexController.getBusqueda);
        this.router.get('/pagina/:id', IndexController_1.indexController.getPagina);
        this.router.post('/send-mail', IndexController_1.indexController.enviarMail);
        //REPORTES
        this.router.get('/reporte/1', IndexController_1.indexController.reporte1);
        this.router.get('/reporte/2', IndexController_1.indexController.reporte2);
        this.router.get('/reporte/3', IndexController_1.indexController.reporte3);
        this.router.get('/reporte/4', IndexController_1.indexController.reporte4);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
