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

        this.router.get('/pais',indexController.getPais);
        this.router.post('/pais',indexController.postPais);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;