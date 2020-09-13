CREATE DATABASE chirper;

USE chirper;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  bio VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  password VARCHAR(255) NOT NULL,
  pinnedChirp INT,
  privacyStatus INT DEFAULT 0,
  profilePicture VARCHAR(255),
  username VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE chirps(
  id SERIAL PRIMARY KEY,
  content VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users(id),
  user_id INT NOT NULL
);

