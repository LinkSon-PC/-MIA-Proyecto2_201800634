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
delete from Usuario;
update  usuario set Fecha_Nacimiento = TO_DATE('2020-10-9','YYYY-MM-DD') WHERE idusuario=1;

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
INSERT INTO Carrito(idUsuario, Estado) VALUES (21,'NO_CANCELADO');

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