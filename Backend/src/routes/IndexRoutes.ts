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
        
        this.router.get('/carrito/:id',indexController.getCarrito);
        this.router.post('/carrito',indexController.postCarrito);

        //PRODUCTOS PARA COMPRAR
        this.router.get('/producto',indexController.getProducto);
        this.router.post('/producto',indexController.postProducto);

        this.router.get('/pagina/:id',indexController.getPagina);
        
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;