import { Router } from 'express';

import {indexController} from '../controllers/IndexController';

class IndexRoutes {
    public router: Router = Router();

    constructor(){
        this.confing();
    }

    confing(): void{
        this.router.get('/',indexController.index);
        this.router.post('/',indexController.usuario);
        this.router.put('/',indexController.putUsuario);

        this.router.get('/login/:usuario/:pass',indexController.BuscarUsuario);
        this.router.get('/login/:id',indexController.getUsuario);

        this.router.get('/pais',indexController.getPais);
        this.router.post('/pais',indexController.postPais);

        this.router.get('/categoria',indexController.getCategoria);
        this.router.post('/categoria',indexController.postCategoria);

        this.router.get('/clave',indexController.getClave);
        this.router.post('/clave',indexController.postClave);

        //PUBLICACIONES DEL USUARIO
        this.router.get('/publicacion',indexController.getProducto);
        this.router.get('/publicacion/:id',indexController.getPublicacion);
        
        this.router.get('/carrito/cabezera/:id',indexController.getCarro)
        this.router.get('/carrito/:id',indexController.getDetalle_Carro);
        this.router.delete('/carrito/:id',indexController.deleteCarrito);
        this.router.post('/carrito',indexController.postCarrito);

        //PRODUCTOS PARA COMPRAR
        this.router.get('/reestablecer/:correo',indexController.Reestablecer_Correo);
        this.router.put('/reestablecer/contrasena/:id',indexController.Reestablecer_Contrasena);
        this.router.put('/confirmar/:id',indexController.Confirmar_Usuario);

        this.router.put('/compra/:id',indexController.Compra);
        this.router.put('/venta/:id',indexController.Venta);

        this.router.get('/producto',indexController.getProducto);
        this.router.post('/producto',indexController.postProducto);
        this.router.post('/buscar',indexController.getBusqueda);

        this.router.get('/pagina/:id',indexController.getPagina);
        
        this.router.post('/send-mail',indexController.enviarMail);


        //REPORTES
        this.router.get('/reporte/1',indexController.reporte1);
        this.router.get('/reporte/2',indexController.reporte2);
        this.router.get('/reporte/3',indexController.reporte3);
        this.router.get('/reporte/4',indexController.reporte4);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;