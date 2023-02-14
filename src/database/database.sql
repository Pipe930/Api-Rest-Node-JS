CREATE DATABASE IF NOT EXISTS companydb;

USE companydb

CREATE TABLE employee(
    id INT(10) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(40) DEFAULT NULL,
    last_name VARCHAR(40) DEFAULT NULL,
    email VARCHAR(255) NOT NULL,
    salary INT(5) DEFAULT NULL,
    
    CONSTRAINT pk_id_employee PRIMARY KEY (id)
);

DESCRIBE employee;