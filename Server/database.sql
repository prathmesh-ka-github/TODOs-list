CREATE DATABASE tododb;

\c tododb;

CREATE TABLE TODO(
    todoid serial primary key, 
    dsc varchar(255)
);