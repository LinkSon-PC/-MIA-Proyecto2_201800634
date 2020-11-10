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
        const sql = "insert into Usuario(Nombre, Apellido, Fecha_Nacimiento, Correo, Contrasena, Credito, Estado, idPais) values (:Nombre, :Apellido, TO_DATE(:Fecha_Nacimiento,'DD-MM-YYYY'), :Correo, :Contrasena, :Credito, :Estado, :idPais)";

        let result = await BD(sql, [Nombre, Apellido, Fecha_Nacimiento, Correo, Contrasena, Credito, Estado, idPais], true);
        res.json(result);
    }
    public async putUsuario(req:Request, res:Response){
        const { idUsuario, Nombre, Apellido, Fecha_Nacimiento, Correo, Contrasena, Credito, Estado, idPais } = req.body;
        console.log(req.body);
        const sql = `UPDATE Usuario SET Nombre=:Nombre, Apellido=:Apellido, Correo=:Correo, Contrasena=:Contrasena, Estado=:Estado,
        Fecha_Nacimiento= TO_DATE(:Fecha_Nacimiento ,'YYYY-MM-DD'), idPais=:idPais, Credito=:Credito
        WHERE idUsuario=:idUsuario`;

        let result = await BD(sql, [ Nombre, Apellido, Correo, Contrasena, Estado, Fecha_Nacimiento, idPais, Credito, idUsuario ], true);
        res.json(result);
    }
    public async getUsuario (req: Request, res:Response){
        const {id} = req.params;
        console.log(id);
        const sql = "SELECT * FROM Usuario WHERE idUsuario = :id";
        try {
            let result = await BD(sql, [ id ], true);
            var Usuario:any[] = [];

            result.rows.map((user:any) => {
                let userSchema = {
                    "idUsuario": user[0],
                    "Nombre": user[1],
                    "Apellido": user[2],
                    "Correo": user[3],
                    "Contrasena": user[4],
                    "Credito": user[5],
                    "Estado": user[6],
                    "idPais": user[7],
                    "Fecha_Nacimiento": user[8]
                }
                Usuario.push(userSchema);
            })
            console.log(Usuario[0]);
            res.json(Usuario[0]);
        } catch (error) {
            res.status(404).json({"mensaje":"DIRECCIIÓN /:id NO ENCONTRADA"});
        }
    }
    public async BuscarUsuario (req: Request, res:Response){
        const {usuario} = req.params;
        const {pass} = req.params;
        console.log(usuario,pass);
        const sql = "SELECT * FROM Usuario WHERE Correo = :usuario AND Contrasena = :pass";
        var Usuario:any[] = [];
    
        try {
            let result = await BD(sql, [ usuario,pass ], true);
                result.rows.map((user:any) => {
                    let userSchema = {
                        "idUsuario": user[0],
                        "Nombre": user[1],
                        "Apellido": user[2],
                        "Fecha_Nacimiento": user[3],
                        "Correo": user[4],
                        "Contrasena": user[5],
                        "Credito": user[6],
                        "Estado": user[7],
                        "idPais": user[8]	
                    }
                    Usuario.push(userSchema);
                })
                console.log(Usuario[0]);
                res.json(Usuario[0]);
            
        } catch (error) {
            res.status(402).json({"mensaje":"ERROR EN LA BASE DE DATOS"})
        }
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

        var Categoria:any[] = [];

        result.rows.map((categoria:any) => {
            let userSchema = {
                "idCategoria": categoria[0],
                "Categoria": categoria[1]
            }
            Categoria.push(userSchema);
        })
        res.json(Categoria);
    }
    public async postCategoria (req: Request, res:Response){
        const { Categoria } = req.body;
        const sql = "insert into Categoria(Categoria) values (:Categoria)";

        let result = await BD(sql, [Categoria], true);
        res.json(result);
    }

    public async getPublicacion (req: Request, res:Response){
        const {id} = req.params;
        const sql = "select * from Producto WHERE idUsuario=:id";
        let result = await BD(sql, [id], false);


        var Productos:any[] = [];

        result.rows.map((user:any) => {
            let userSchema = {
                "idProducto": user[0],
                "Nombre": user[1],
                "Detalle_Producto": user[2],
                "Precio": user[3],
                "idCategoria": user[4],
                "idUsuario": user[5],
                "Estado": user[6]	
            }
            Productos.push(userSchema);
        })
        console.log(result.rows);
        res.json(Productos);
    }
    public async getProducto (req: Request, res:Response){
        const sql = "select * from Producto";
        let result = await BD(sql, [], false);


    var Productos:any[] = [];

    result.rows.map((user:any) => {
        let userSchema = {
            "idProducto": user[0],
            "Nombre": user[1],
            "Detalle_Producto": user[2],
            "Precio": user[3],
            "idCategoria": user[4],
            "idUsuario": user[5],
            "Estado": user[6]	
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
            "idProducto": user[0],
            "Nombre": user[1],
            "Detalle_Producto": user[2],
            "Precio": user[3],
            "idCategoria": user[4],
            "idUsuario": user[5],
            "Estado": user[6]	
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