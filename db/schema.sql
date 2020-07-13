CREATE DATABASE best_burgers;

USE best_burgers;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	yummy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

SELECT*FROM burgers;