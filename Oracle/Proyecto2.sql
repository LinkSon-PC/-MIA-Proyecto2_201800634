CREATE TABLE usuario(
idUsuario INT NOT NULL PRIMARY KEY,
nombre VARCHAR(20),
contrasena VARCHAR(20)
);

INSERT INTO usuario (nombre, contrasena) values ('anthonhy','password');

select * from usuario;