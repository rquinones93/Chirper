CREATE DATABASE chirper;

USE chirper;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  password VARCHAR(255) NOT NULL,
  profilePicture VARCHAR(255),
  bio VARCHAR(255),
  pinnedChirp INT,
  privacyStatus INT DEFAULT 0
);

CREATE TABLE chirps(
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  content VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE likes(
  user_id INT NOT NULL,
  chirp_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (chirp_id) REFERENCES chirps(id),
  PRIMARY KEY (user_id, chirp_id)
);

CREATE TABLE follows(
  follower_id INT NOT NULL,
  followee_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (follower_id) REFERENCES users(id),
  FOREIGN KEY (followee_id) REFERENCES users(id),
  PRIMARY KEY(follower_id, followee_id)
);

CREATE TABLE tags(
  id INT AUTO_INCREMENT PRIMARY KEY,
  tag_name VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE hash_tags(
  hash_id INT NOT NULL,
  tag_id INT NOT NULL,
  FOREIGN KEY (hash_id) REFERENCES chirps(id),
  FOREIGN KEY (tag_id) REFERENCES tags(id),
  PRIMARY KEY (chirps_id, tag_id)
);