import {Request, Response} from 'express';

//import pool from '../datbase'

class IndexController {
    public async index (req: Request, res:Response){
        console.log('windos');
        res.json({message: "Tabla temporal Creada"});
    }
}

export const indexController = new IndexController();