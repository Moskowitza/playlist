DROP DATABASE IF EXISTS personalPlaylistDB;

CREATE DATABASE personalPlaylistDB;

USE personalPlaylistDB;

CREATE TABLE playlist (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO playlist (title, artist, genre)
VALUES ("Debaser","Pixies", "rock");

INSERT INTO playlist (title, artist, genre)
VALUES ("Hyper Enough", "Superchunk", "indie");

INSERT INTO playlist (title, artist, genre)
VALUES ("Dreams", "Fleetwood Mac", "Classic Rock");

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
