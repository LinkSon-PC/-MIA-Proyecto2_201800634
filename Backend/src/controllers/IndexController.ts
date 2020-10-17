import {Request, Response} from 'express';
import BD from '../config/configdb';

//import pool from '../datbase'

class IndexController {
    public async index (req: Request, res:Response){
        console.log('windos');

        const sql = "select * from usuario";

        let result = await BD(sql, [], false);
        
        res.json(result);
    }
}

export const indexController = new IndexController();