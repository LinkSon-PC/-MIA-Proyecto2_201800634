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
}
exports.indexController = new IndexController();
