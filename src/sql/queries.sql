/*CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(25),
  password VARCHAR(25)
);*/
-- SHOW TABLES;
/*CREATE TABLE notes (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  content TEXT,
  user_id INT NOT NULL DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);*/
-- SHOW TABLES;
-- DESCRIBE notes;
-- DESCRIBE users;
-- INSERT INTO users(username, password) VALUES ('Jane Doe', '12345');
-- INSERT INTO users(username, password) VALUES ('John Doe', '12345');
-- SELECT * FROM users;
-- SELECT username FROM users;
-- SELECT username FROM users WHERE id=1;
-- INSERT INTO notes(title, content, user_id) VALUES('Vagrant', 'Una nota de Vagrant', 1);
-- SELECT * FROM notes;
/*INSERT INTO notes(title, content, user_id) VALUES('SQL', 'Una nota de SQL', 1);
INSERT INTO notes(title, content, user_id) VALUES('SQL', 'Una nota de SQL', 2);
INSERT INTO notes(title, content, user_id) VALUES('JS', 'Una nota de JS', 2);
INSERT INTO notes(title, content, user_id) VALUES('HTML', 'Una nota de HTML', 2);*/
-- SELECT * FROM notes;
/*SELECT * FROM notes
JOIN users
ON notes.user_id = users.id;*/
-- SELECT * FROM notes WHERE user_id = 2;