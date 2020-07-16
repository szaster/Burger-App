
INSERT INTO burgers (burger_name, devoured) VALUES ('Vegetarian', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Double Patty Bizon', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Philly Cheese Steak', true);

-- TRUNCATE TABLE burgers;

USE best_burgers_db;

UPDATE burgers SET devoured = false WHERE ID = 1; 

SELECT * FROM burgers;
