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


    public async getCategoria (req: Request, res:Response){
        const sql = "select * from Categoria";
        let result = await BD(sql, [], false);
        res.json(result);
    }
    public async postCategoria (req: Request, res:Response){
        const { Categoria } = req.body;
        const sql = "insert into Categoria(Categoria) values (:Categoria)";

        let result = await BD(sql, [Categoria], true);
        res.json(result);
    }


    public async getProducto (req: Request, res:Response){
        const sql = "select * from Producto";
        let result = await BD(sql, [], false);


    var Productos:any[] = [];

    result.rows.map((user:any) => {
        let userSchema = {
            "Nombre": user[0],
            "Detalle_Producto": user[1],
            "Precio": user[2],
            "idCategoria": user[3],
            "idUsuario": user[4],
            "Estado": user[5]	
        }
        Productos.push(userSchema);
    })
    console.log(result.rows);
        res.json(Productos);
    }
    public async postProducto (req: Request, res:Response){
        const { Nombre,Detalle_Producto,Precio,idCategoria,idUsuario,Estado } = req.body;
        const sql = "insert into Producto( Nombre,Detalle_Producto,Precio,idCategoria,idUsuario,Estado) values (:Nombre, :Detalle_Producto, :Precio, :idCategoria, :idUsuario, :Estado )";

        let result = await BD(sql, [ Nombre,Detalle_Producto,Precio,idCategoria,idUsuario,Estado ], true);
        res.json(result);
    }


    public async getPagina(req:Request, res:Response){
        const {id} = req.params;
        console.log(id);
        const sql = "select * from Producto WHERE idPRoducto = :id";
        let result = await BD(sql, [id], false);


    var Productos:any[] = [];

    result.rows.map((user:any) => {
        let userSchema = {
            "Nombre": user[0],
            "Detalle_Producto": user[1],
            "Precio": user[2],
            "idCategoria": user[3],
            "idUsuario": user[4],
            "Estado": user[5]	
        }
        Productos.push(userSchema);
    })
        console.log(Productos);
        res.json(Productos);
    }


    public async getClave (req: Request, res:Response){
        const sql = "select * from Clave";
        let result = await BD(sql, [], false);
        res.json(result);
    }
    public async postClave (req: Request, res:Response){
        const { Clave } = req.body;
        const sql = "insert into Clave(Clave) values (:Clave)";

        let result = await BD(sql, [Clave], true);
        res.json(result);
    }
}


export const indexController = new IndexController();