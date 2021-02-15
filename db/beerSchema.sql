CREATE DATABASE IF NOT EXISTS beer_db;
USE beer_db;

CREATE TABLE beers(
    id INT NOT NULL AUTO_INCREMENT,
    brewery_name VARCHAR(100) NOT NULL,
    beer_name VARCHAR(100) NOT NULL,
    beer_style VARCHAR(100) NOT NULL,
    alcohol_content DECIMAL(10,2) NOT NULL,
    malt_type VARCHAR(100) NOT NULL,
    hop_type VARCHAR(100) NOT NULL,
    beer_taste VARCHAR(100) NOT NULL,
    beer_pairing VARCHAR(100) NOT NULL,
    beer_price DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(id)
);