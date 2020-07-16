USE best_burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL
	AUTO_INCREMENT,
	burger_name varchar
	(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY
	(id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Vegetarian', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Double Patty Bison', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Philly Cheese Steak', true);

-- TRUNCATE TABLE burgers;

-- UPDATE burgers SET devoured = false WHERE ID = 1; 

SELECT * FROM burgers;