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
const nodemailer = require("nodemailer");
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
            const sql = "insert into Usuario(Nombre, Apellido, Fecha_Nacimiento, Correo, Contrasena, Credito, Estado, idPais) values (:Nombre, :Apellido, TO_DATE(:Fecha_Nacimiento,'YYYY-MM-DD'), :Correo, :Contrasena, :Credito, :Estado, :idPais)";
            yield configdb_1.default(sql, [Nombre, Apellido, Fecha_Nacimiento, Correo, Contrasena, Credito, Estado, idPais], true);
            const sql2 = "insert into Carrito(idUsuario, Estado) VALUES ((select max(idUsuario) from Usuario), 'NO_CANCELADO')";
            yield configdb_1.default(sql2, [], true);
            const sql3 = "select max(idUsuario) from Usuario";
            let result = yield configdb_1.default(sql3, [], true);
            res.json(result.rows[0]);
        });
    }
    putUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUsuario, Nombre, Apellido, Fecha_Nacimiento, Correo, Contrasena, Credito, Estado, idPais } = req.body;
            console.log(req.body);
            const sql = `UPDATE Usuario SET Nombre=:Nombre, Apellido=:Apellido, Correo=:Correo, Contrasena=:Contrasena, Estado=:Estado,
        Fecha_Nacimiento= TO_DATE(:Fecha_Nacimiento ,'YYYY-MM-DD'), idPais=:idPais, Credito=:Credito
        WHERE idUsuario=:idUsuario`;
            let result = yield configdb_1.default(sql, [Nombre, Apellido, Correo, Contrasena, Estado, Fecha_Nacimiento, idPais, Credito, idUsuario], true);
            res.json(result);
        });
    }
    getUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            const sql = "SELECT * FROM Usuario WHERE idUsuario = :id";
            try {
                let result = yield configdb_1.default(sql, [id], true);
                var Usuario = [];
                result.rows.map((user) => {
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
                    };
                    Usuario.push(userSchema);
                });
                console.log(Usuario[0]);
                res.json(Usuario[0]);
            }
            catch (error) {
                res.status(404).json({ "mensaje": "DIRECCIIÓN /:id NO ENCONTRADA" });
            }
        });
    }
    BuscarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario } = req.params;
            const { pass } = req.params;
            console.log(usuario, pass);
            const sql = "SELECT * FROM Usuario WHERE Correo = :usuario AND Contrasena = :pass";
            var Usuario = [];
            try {
                let result = yield configdb_1.default(sql, [usuario, pass], true);
                result.rows.map((user) => {
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
                    };
                    Usuario.push(userSchema);
                });
                console.log(Usuario[0]);
                res.json(Usuario[0]);
            }
            catch (error) {
                res.status(402).json({ "mensaje": "ERROR EN LA BASE DE DATOS" });
            }
        });
    }
    getPais(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "select * from Pais";
            let result = yield configdb_1.default(sql, [], false);
            var Pais = [];
            result.rows.map((user) => {
                let userSchema = {
                    "idPais": user[0],
                    "Pais": user[1]
                };
                Pais.push(userSchema);
            });
            console.log(Pais);
            res.json(Pais);
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
            var Categoria = [];
            result.rows.map((categoria) => {
                let userSchema = {
                    "idCategoria": categoria[0],
                    "Categoria": categoria[1]
                };
                Categoria.push(userSchema);
            });
            res.json(Categoria);
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
    getPublicacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const sql = "select * from Producto WHERE idUsuario=:id";
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
            console.log(result.rows);
            res.json(Productos);
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
    getBusqueda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, idCategoria, orden } = req.body;
            console.log(nombre, idCategoria, orden);
            let sql = `select * from producto where nombre like '%` + nombre + `%'`;
            if (idCategoria != 0) {
                sql += " and idCategoria = :idCategoria";
            }
            if (orden == "ASCENDENTE") {
                sql += " order by precio ASC";
            }
            else if (orden == "DESCENDENTE") {
                sql += " order by precio DESC";
            }
            console.log(sql);
            let result;
            if (idCategoria != 0) {
                result = yield configdb_1.default(sql, [idCategoria], false);
            }
            else {
                result = yield configdb_1.default(sql, [], false);
            }
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
    getDetalle_Carro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            const sql = `select Detalle_Carrito.idDetalle_Carrito, Producto.idProducto, Producto.nombre, Producto.detalle_producto, Producto.precio  
        from Detalle_Carrito, Carrito, Producto
        WHERE Carrito.idUsuario = :id
        AND Carrito.idCarrito = Detalle_Carrito.idCarrito
        AND Carrito.Estado = 'NO_CANCELADO'
        AND Producto.idproducto = Detalle_Carrito.idproducto`;
            let result = yield configdb_1.default(sql, [id], false);
            var Productos = [];
            result.rows.map((user) => {
                let userSchema = {
                    "idDetalle_Carrito": user[0],
                    "idProducto": user[1],
                    "Nombre": user[2],
                    "Detalle_Producto": user[3],
                    "Precio": user[4]
                };
                Productos.push(userSchema);
            });
            console.log(result);
            res.json(Productos);
        });
    }
    postCarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUsuario, idProducto } = req.body;
            const sql = `insert into Detalle_Carrito(idCarrito,idProducto,Cantidad) values 
        ((select idCarrito FROM Carrito Where idUsuario=:idUsuario AND Estado = 'NO_CANCELADO'),
        :idProducto, 1)`;
            let result = yield configdb_1.default(sql, [idUsuario, idProducto], true);
            res.json(result);
        });
    }
    deleteCarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const sql = `DELETE FROM Detalle_Carrito WHERE idDetalle_Carrito = :id`;
            let result = yield configdb_1.default(sql, [id], true);
            res.json(result);
        });
    }
    enviarMail(req, res) {
        const { correo, asunto, texto } = req.body;
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'euna.thompson2@ethereal.email',
                pass: 'Dvj8P361zS6Bhphtm7'
            }
        });
        var mailOptions = {
            from: "REMITENTE",
            to: correo,
            subject: asunto,
            text: texto
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).send(error.message);
            }
            else {
                console.log("MENSAJE ENVIADO");
                res.status(200).send(req.body);
            }
        });
    }
    Reestablecer_Correo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { correo } = req.params;
            console.log(correo);
            const sql = 'select idUsuario from Usuario where correo = :correo';
            let result = yield configdb_1.default(sql, [correo], false);
            console.log(result);
            res.json(result.rows[0]);
        });
    }
    Reestablecer_Contrasena(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { Contrasena } = req.body;
            console.log(id, Contrasena);
            const sql = 'update  Usuario set Contrasena = :Contrasena where idUsuario = :id';
            let result = yield configdb_1.default(sql, [Contrasena, id], true);
            console.log(result);
            res.json(result);
        });
    }
    Confirmar_Usuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            const sql = `update  Usuario set Estado = 'VERIFICADO' where idUsuario = :id`;
            let result = yield configdb_1.default(sql, [id], true);
            console.log(result);
            res.json(result);
        });
    }
    getCarro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            const sql = `select Carrito.idCarrito, Usuario.Credito, sum(Producto.precio) as Total from Detalle_Carrito, Carrito, Producto, Usuario
        where Carrito.idCarrito = Detalle_Carrito.idCarrito
        and Detalle_Carrito.idProducto = Producto.idProducto
        and Usuario.idUsuario = :id
        and Carrito.idUsuario = Usuario.idUsuario
        and Carrito.Estado = 'NO_CANCELADO'
        group by Carrito.idCarrito, Usuario.Credito`;
            let result = yield configdb_1.default(sql, [id], false);
            var Carro = [];
            result.rows.map((user) => {
                let userSchema = {
                    "idCarrito": user[0],
                    "Credito": user[1],
                    "Total": user[2]
                };
                Carro.push(userSchema);
            });
            if (result.rows.length = 0) {
                console.log("fsoijfiosjeif");
            }
            console.log(result);
            res.json(Carro[0]);
        });
    }
    Compra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { Credito, idCarrito } = req.body;
            console.log(id, Credito);
            const sql = `update usuario set Credito = :Credito where idUsuario = :id`;
            let result = yield configdb_1.default(sql, [Credito, id], true);
            const sql2 = `update Carrito set Estado='CANCELADO' where idUsuario = :id AND Estado='NO_CANCELADO'`;
            yield configdb_1.default(sql2, [id], true);
            const sql3 = "insert into Carrito(idUsuario, Estado) VALUES (:id, 'NO_CANCELADO')";
            yield configdb_1.default(sql3, [id], true);
            res.json(result);
        });
    }
    Venta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { Credito } = req.body;
            console.log(id, Credito);
            const sql = `update usuario set Credito = (Credito + :Credito) where 
                    idusuario = (select Usuario.idUsuario from Usuario,Producto 
                                    where idProducto = :id
                                    and Usuario.idUsuario = Producto.idUsuario)`;
            let result = yield configdb_1.default(sql, [Credito, id], true);
            res.json(result);
        });
    }
    reporte1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT  Producto.nombre, count(Producto.idProducto) as Cantidad from Detalle_Carrito, Producto
        where Detalle_Carrito.idProducto = Producto.idProducto
        and rownum <= 10
        group by Producto.nombre order by Cantidad desc `;
            let result = yield configdb_1.default(sql, [], false);
            var Carro = [];
            result.rows.map((user) => {
                let userSchema = {
                    "Nombre": user[0],
                    "Cantidad": user[1]
                };
                Carro.push(userSchema);
            });
            console.log(result);
            res.json(Carro);
        });
    }
    reporte2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT * FROM usuario where estado = 'VERIFICADO' and rownum <=10 order by Credito desc `;
            let result = yield configdb_1.default(sql, [], false);
            var Carro = [];
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
                Carro.push(userSchema);
            });
            const sql2 = `SELECT * FROM usuario where estado = 'VERIFICADO' and rownum <=10 order by Credito asc `;
            let result2 = yield configdb_1.default(sql2, [], false);
            var Carro = [];
            result2.rows.map((user) => {
                let userSchema = {
                    "idProducto": user[0],
                    "Nombre": user[1],
                    "Detalle_Producto": user[2],
                    "Precio": user[3],
                    "idCategoria": user[4],
                    "idUsuario": user[5],
                    "Estado": user[6]
                };
                Carro.push(userSchema);
            });
            console.log(result);
            res.json(Carro);
        });
    }
    reporte3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT DISTINCT Usuario.Nombre, Usuario.Correo, Usuario.Credito, count(usuario.Nombre) as Cantidad FROM Usuario, Producto
        where Producto.idUsuario = Usuario.idUsuario
        and rownum <= 10
        group by (Usuario.Nombre, Usuario.Correo, Usuario.Credito) order by Cantidad DESC `;
            let result = yield configdb_1.default(sql, [], false);
            var Carro = [];
            result.rows.map((user) => {
                let userSchema = {
                    "nombre": user[0],
                    "correo": user[1],
                    "credito": user[2],
                    "cantidad": user[3]
                };
                Carro.push(userSchema);
            });
            console.log(result);
            res.json(Carro);
        });
    }
    reporte4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `Select DISTINCT Tabla.Pais, count(Producto.idProducto) as Cantidad_Producto, sum(Usuario.Credito) as Cantidad_Credito, Tabla.Cantidad_Cliente
        from
            (select Distinct Pais.Pais, Pais.idPais, count(Usuario.idUsuario) as Cantidad_Cliente FROM Usuario, Pais
            where Usuario.idPais = Pais.idPais
            group by Pais.Pais, Pais.idPais )  Tabla, Usuario,Producto
        where Producto.idUsuario = Usuario.idUsuario
        and Usuario.idPais = tabla.idpais
        and rownum <= 10 
        group by Tabla.Pais, Cantidad_Cliente, Tabla.Cantidad_Cliente order by Cantidad_Credito, tabla.cantidad_cliente, Cantidad_Producto desc`;
            let result = yield configdb_1.default(sql, [], false);
            var Carro = [];
            result.rows.map((user) => {
                let userSchema = {
                    "Pais": user[0],
                    "Cantidad_Producto": user[1],
                    "Cantidad_Credito": user[2],
                    "Cantidad_Cliente": user[3]
                };
                Carro.push(userSchema);
            });
            console.log(result);
            res.json(Carro);
        });
    }
}
exports.indexController = new IndexController();
