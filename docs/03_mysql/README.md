# Comandos MySQL

## Bases de datos
* Mostrar todas las bases de datos
```sql
SHOW DATABASES;
 ```
* Crear una nueva base de datos
```sql
CREATE DATABASE name;
```
* Borrar una base de datos
```sql
DROP DATABASE name;
```
* Seleccionar base de datos
```sql
USE name;
```

## Usuarios y permisos
* Crear usuarios
```sql
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
```
* Asignar permisos al usuario
Para ver más permisos revisar https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html

  * Formato
  ```sql
  GRANT [permiso] ON [nombre de bases de datos].[nombre de tabla] TO '[nombre de usuario]'@'[host]';
  ```
  * Ejemplo
  ```
  GRANT ALL PRIVILEGES ON * . * TO 'user'@'localhost';
  ```
* Borrar usuario
```sql
DROP USER 'user'@'localhost';
```
* Refrescar permisos en la DB
```sql
FLUSH PRIVILEGES;
```

## Tablas
* Crear tabla
  * Formato
  ```sql
  CREATE TABLE name (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    [nombre_campo_n] [TIPO]);
  ```
  * Ejemplo
  ```sql
  CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50));
  ```
* Ver el formato de una tabla
```sql
DESCRIBE name;
```
* Borrar una tabla
```sql
DROP TABLE name;
```
## Relaciones
* Con CREATE TABLE
```sql
CREATE TABLE user (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT);
  
CREATE TABLE notes(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE);
```
* Con ALTER TABLE
```sql
CREATE TABLE user (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT);

CREATE TABLE notes(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT);

ALTER TABLE notes ADD user_id INT NOT NULL DEFAULT 0;
ALTER TABLE notes ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE;
```

## Operaciones CRUD
### Create
```sql
INSERT INTO users (id,name) VALUES (NULL, "Laboratoria");
```
### Read
```sql
SELECT * FROM users WHERE id=1;
SELECT id, name FROM users WHERE name LIKE “%sa%”;
```
### Update
```sql
UPDATE users SET name = “Test” WHERE id=1;
```
### Delete
```sql
DELETE FROM users WHERE id=1;
```