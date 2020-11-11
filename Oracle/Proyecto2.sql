CREATE TABLE Pais(
idPais INT NOT NULL PRIMARY KEY,
Pais VARCHAR2(20)
);

CREATE TABLE Usuario(
idUsuario INT NOT NULL PRIMARY KEY,
Nombre VARCHAR2(20),
Apellido VARCHAR2(20),
Fecha_Nacimiento DATE,
Correo VARCHAR(30),
Contrasena VARCHAR(10),
Credito FLOAT,
Estado VARCHAR2(10),
idPais INT,
FOREIGN KEY (idPais) REFERENCES Pais(idPais)
);

SELECT * FROM Usuario;
delete from Usuario WHERE idUsuario = 26;
select max(idUsuario) from Usuario;
update  usuario set Fecha_Nacimiento = TO_DATE('2020-10-9','YYYY-MM-DD') WHERE idusuario=1;
COMMIT WORK;

create table tipo_usuario(
cod_tipo_usuario INT NOT NULL,
nombre_tipo VARCHAR2(15) NOT NULL
);

CREATE TABLE Categoria(
idCategoria INT NOT NULL PRIMARY KEY,
Categoria VARCHAR2(29)
);
select * from Categoria;

CREATE TABLE Clave(
idClave INT NOT NULL PRIMARY KEY,
Clave VARCHAR2(20)
);

CREATE TABLE Producto(
idProducto INT NOT NULL PRIMARY KEY,
Nombre VARCHAR2(20),
Detalle_Producto VARCHAR2(50),
Precio FLOAT,
idCategoria INT,
idUsuario INT,
Estado VARCHAR2(10),
FOREIGN KEY (idCategoria) REFERENCES Categoria(idCategoria),
FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);
select * from producto;
select * from producto where idUsuario = 0;


CREATE TABLE Palabra_Clave (
idProducto INT NOT NULL PRIMARY KEY,
idClave INT,
PRIMARY KEY (idProducto, idClave),
FOREIGN KEY (idProducto) REFERENCES Producto(idProducto),
FOREIGN KEY (idClave) REFERENCES Clave(idClave)
);

SELECT * FROM producto WHERE idProducto = 2;

CREATE TABLE Carrito(
idCarrito INT NOT NULL PRIMARY KEY,
idUsuario INT,
Estado VARCHAR2(15),
FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);
SELECT * FROM Carrito;
select  Producto.idProducto, Producto.nombre, producto.detalle_producto, producto.precio  from Detalle_Carrito, Carrito, Producto WHERE Carrito.idUsuario = 1
            AND Carrito.idCarrito = Detalle_Carrito.idCarrito
            AND Carrito.Estado = 'NO_CANCELADO'
            AND producto.idproducto = detalle_carrito.idproducto;
DELETE FROM Carrito WHERE idUsuario =21;
INSERT INTO Carrito(idUsuario, Estado) VALUES (21,'NO_CANCELADO');
insert into Carrito(idUsuario, Estado) VALUES ((select max(idUsuario) from Usuario), 'NO_CANCELADO');
insert into Detalle_Carrito(idCarrito,idProducto,Cantidad) values 
        ((select idCarrito FROM Carrito Where idUsuario=1 AND Estado = 'NO_CANCELADO'),
        1, 1);

CREATE TABLE Detalle_Carrito(
idDetalle_Carrito INT NOT NULL PRIMARY KEY,
idCarrito INT,
idProducto INT,
Cantidad INT,
FOREIGN KEY (idCarrito) REFERENCES Carrito(idCarrito),
FOREIGN KEY (idProducto) REFERENCES Producto(idProducto)
);
SELECT * FROM Detalle_Carrito;

drop table Producto;
INSERT INTO usuario (nombre, contrasena) values ('anthonhy','password');
select * from usuario;