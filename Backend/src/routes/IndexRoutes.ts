import { Router } from 'express';

import {indexController} from '../controllers/IndexController';

class IndexRoutes {
    public router: Router = Router();

    constructor(){
        this.confing();
    }

    confing(): void{
        this.router.get('/',indexController.index);

    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;