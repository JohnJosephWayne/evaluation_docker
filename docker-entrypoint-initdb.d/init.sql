CREATE DATABASE IF NOT EXISTS evaluation_db;
USE evaluation_db;

CREATE TABLE IF NOT EXISTS times (
     id INT AUTO_INCREMENT PRIMARY KEY,
     time DATETIME NOT NULL
);