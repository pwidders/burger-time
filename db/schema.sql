DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db
DEFAULT CHARACTER SET utf8
    DEFAULT COLLATE utf8_general_ci;

USE burgers_db;

CREATE TABLE burgers
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR (100),
  devoured BOOLEAN
);
