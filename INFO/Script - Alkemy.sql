CREATE DATABASE alkemy_presupuesto;

USE alkemy_presupuesto;

CREATE TABLE operacion(
id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
concepto VARCHAR(20) NOT NULL,
monto DOUBLE (8,2) NOT NULL,
fecha DATETIME NOT NULL,
tipo VARCHAR(10) NOT NULL
);