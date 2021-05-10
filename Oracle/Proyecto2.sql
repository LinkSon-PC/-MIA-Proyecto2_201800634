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
select Correo from Usuario where correo='tonyfernandosonmux@gmail.com';
delete  from Usuario WHERE idUsuario = 27;
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
select * from producto where nombre like '%%' AND idCategoria = 5  order by precio asc;


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
DELETE FROM Carrito WHERE idUsuario =45;
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
select detalle_carrito.iddetalle_carrito, Producto.idProducto, Producto.nombre, producto.detalle_producto, producto.precio
            from Detalle_Carrito, Carrito, Producto WHERE Carrito.idUsuario = 1
            AND Carrito.idCarrito = Detalle_Carrito.idCarrito
            AND Carrito.Estado = 'NO_CANCELADO'
            AND producto.idproducto = detalle_carrito.idproducto;
            
update usuario set Credito = (Credito + 600) where 
idusuario = (select Usuario.idUsuario from Usuario,Producto 
                where idProducto = 1
                and Usuario.idUsuario = Producto.idUsuario);
select * from usuario;
update usuario set Credito = 10000 where idUsuario = 1;
COMMIT WORK;
--TOTAL DEL CARRITO
select Carrito.idCarrito, Usuario.Credito, sum(Producto.precio) as Total from Detalle_Carrito, Carrito, Producto, Usuario
where Carrito.idCarrito = Detalle_Carrito.idCarrito
and Detalle_Carrito.idProducto = Producto.idProducto
and Usuario.idUsuario = 1
and Carrito.idUsuario = Usuario.idUsuario
and Carrito.Estado = 'NO_CANCELADO'
group by Carrito.idCarrito, Usuario.Credito;

--REPORTE PRODUCTOS MÁS VENDIDOS
SELECT  Producto.nombre, count(Producto.idProducto) as Cantidad from Detalle_Carrito, Producto
where Detalle_Carrito.idProducto = Producto.idProducto
and rownum <= 10
group by Producto.nombre order by Cantidad desc ;


--REPORTE CLIENETES CON MAY Y MENOS CREDITOS
SELECT * FROM usuario where estado = 'VERIFICADO' and rownum <=10 order by Credito desc;


--REPORTE CLIENTES CON MAS PUBLICACIONES
SELECT DISTINCT Usuario.Nombre, Usuario.Correo, Usuario.Credito, count(usuario.Nombre) as Cantidad FROM Usuario, Producto
where Producto.idUsuario = Usuario.idUsuario
and rownum <= 10
group by (Usuario.Nombre, Usuario.Correo, Usuario.Credito) order by Cantidad DESC;

--REPORTE CANTIDAD DE CLIENTES, CRETIDOS,PRODUCTOS POR PAIS
Select DISTINCT Tabla.Pais, count(Producto.idProducto) as Cantidad_Producto, sum(Usuario.Credito) as Cantidad_Credito, Tabla.Cantidad_Cliente
from
    (select Distinct Pais.Pais, Pais.idPais, count(Usuario.idUsuario) as Cantidad_Cliente FROM Usuario, Pais
    where Usuario.idPais = Pais.idPais
    group by Pais.Pais, Pais.idPais )  Tabla, Usuario,Producto
where Producto.idUsuario = Usuario.idUsuario
and Usuario.idPais = tabla.idpais
and rownum <= 10 
group by Tabla.Pais, Cantidad_Cliente, Tabla.Cantidad_Cliente order by Cantidad_Credito, tabla.cantidad_cliente, Cantidad_Producto desc ;


drop table Producto;
INSERT INTO usuario (nombre, contrasena) values ('anthonhy','password');
select * from usuario;