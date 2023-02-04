CREATE DATABASE myfavorites;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE favorites(
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  rating VARCHAR NOT NULL,
  note VARCHAR,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);

CREATE TABLE categories(
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);