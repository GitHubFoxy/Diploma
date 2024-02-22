CREATE DATABASE IF NOT EXISTS diplomaDB;
USE diplomaDB;
CREATE TABLE IF NOT EXISTS users(
	uniqueID INT NOT NULL primary key auto_increment,
    login varchar(128) NOT NULL,
    password varchar(256) NOT NULL
)