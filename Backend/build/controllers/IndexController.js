"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
const configdb_1 = __importDefault(require("../config/configdb"));
//import pool from '../datbase'
class IndexController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('windos');
            const sql = "select * from Usuario";
            let result = yield configdb_1.default(sql, [], false);
            res.json(result);
        });
    }
    usuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Nombre, Apellido, Fecha_Nacimiento, Correo, Contrasena, Credito, Estado, idPais } = req.body;
            const sql = "insert into Usuario(Nombre, Apellido, Fecha_Nacimiento, Correo, Contrasena, Credito, Estado, idPais) values (:Nombre, :Apellido, :Fecha_Nacimiento, :Correo, :Contrasena, :Credito, :Estado, :idPais)";
            let result = yield configdb_1.default(sql, [Nombre, Apellido, Fecha_Nacimiento, Correo, Contrasena, Credito, Estado, idPais], true);
            res.json(result);
        });
    }
    getPais(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "select * from Pais";
            let result = yield configdb_1.default(sql, [], false);
            res.json(result);
        });
    }
    postPais(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Pais } = req.body;
            const sql = "insert into Pais(Pais) values (:Pais)";
            let result = yield configdb_1.default(sql, [Pais], true);
            res.json(result);
        });
    }
    getCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "select * from Categoria";
            let result = yield configdb_1.default(sql, [], false);
            res.json(result);
        });
    }
    postCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Categoria } = req.body;
            const sql = "insert into Categoria(Categoria) values (:Categoria)";
            let result = yield configdb_1.default(sql, [Categoria], true);
            res.json(result);
        });
    }
    getProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "select * from Producto";
            let result = yield configdb_1.default(sql, [], false);
            var Productos = [];
            result.rows.map((user) => {
                let userSchema = {
                    "idProducto": user[0],
                    "Nombre": user[1],
                    "Detalle_Producto": user[2],
                    "Precio": user[3],
                    "idCategoria": user[4],
                    "idUsuario": user[5],
                    "Estado": user[6]
                };
                Productos.push(userSchema);
            });
            console.log(result.rows);
            res.json(Productos);
        });
    }
    postProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Nombre, Detalle_Producto, Precio, idCategoria, idUsuario, Estado } = req.body;
            const sql = "insert into Producto( Nombre,Detalle_Producto,Precio,idCategoria,idUsuario,Estado) values (:Nombre, :Detalle_Producto, :Precio, :idCategoria, :idUsuario, :Estado )";
            let result = yield configdb_1.default(sql, [Nombre, Detalle_Producto, Precio, idCategoria, idUsuario, Estado], true);
            res.json(result);
        });
    }
    getPagina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            const sql = "select * from Producto WHERE idPRoducto = :id";
            let result = yield configdb_1.default(sql, [id], false);
            var Productos = [];
            result.rows.map((user) => {
                let userSchema = {
                    "idProducto": user[0],
                    "Nombre": user[1],
                    "Detalle_Producto": user[2],
                    "Precio": user[3],
                    "idCategoria": user[4],
                    "idUsuario": user[5],
                    "Estado": user[6]
                };
                Productos.push(userSchema);
            });
            console.log(Productos);
            res.json(Productos);
        });
    }
    getClave(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "select * from Clave";
            let result = yield configdb_1.default(sql, [], false);
            res.json(result);
        });
    }
    postClave(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Clave } = req.body;
            const sql = "insert into Clave(Clave) values (:Clave)";
            let result = yield configdb_1.default(sql, [Clave], true);
            res.json(result);
        });
    }
}
exports.indexController = new IndexController();
