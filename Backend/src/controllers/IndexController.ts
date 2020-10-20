import {Request, Response} from 'express';
import BD from '../config/configdb';

//import pool from '../datbase'

class IndexController {
    public async index (req: Request, res:Response){
        console.log('windos');

        const sql = "select * from Usuario";
        let result = await BD(sql, [], false);
        res.json(result);
    }

    public async usuario (req: Request, res:Response){
        const { Nombre, Apellido, Fecha_Nacimiento, Correo, Contrasena, Credito, Estado, idPais } = req.body;
        const sql = "insert into Usuario(Nombre, Apellido, Fecha_Nacimiento, Correo, Contrasena, Credito, Estado, idPais) values (:Nombre, :Apellido, :Fecha_Nacimiento, :Correo, :Contrasena, :Credito, :Estado, :idPais)";

        let result = await BD(sql, [Nombre, Apellido, Fecha_Nacimiento, Correo, Contrasena, Credito, Estado, idPais], true);
        res.json(result);
    }

    public async getPais (req: Request, res:Response){
        const sql = "select * from Pais";
        let result = await BD(sql, [], false);
        res.json(result);
    }

    public async postPais (req: Request, res:Response){
        const { Pais } = req.body;
        const sql = "insert into Pais(Pais) values (:Pais)";

        let result = await BD(sql, [Pais], true);
        res.json(result);
    }
}

export const indexController = new IndexController();