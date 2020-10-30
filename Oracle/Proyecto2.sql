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

create table tipo_usuario(
cod_tipo_usuario INT NOT NULL,
nombre_tipo VARCHAR2(15) NOT NULL
);

CREATE TABLE Categoria(
idCategoria INT NOT NULL PRIMARY KEY,
Categoria VARCHAR2(29)
);

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

CREATE TABLE Palabra_Clave (
idProducto INT,
idClave INT,
PRIMARY KEY (idProducto, idClave),
FOREIGN KEY (idProducto) REFERENCES Producto(idProducto),
FOREIGN KEY (idClave) REFERENCES Clave(idClave)
);

SELECT * FROM producto WHERE idProducto = 2;

drop table Producto;
INSERT INTO usuario (nombre, contrasena) values ('anthonhy','password');
select * from usuario;