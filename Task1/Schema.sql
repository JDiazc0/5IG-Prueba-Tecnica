CREATE DATABASE IF NOT EXISTS `5IG_Solution`;

USE `5IG_Solution`;

CREATE TABLE Status (
	id INT AUTO_INCREMENT PRIMARY KEY,
    status VARCHAR(256) NOT NULL
);

CREATE TABLE Topic (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(256) NOT NULL
);

CREATE TABLE Location (
	id INT AUTO_INCREMENT PRIMARY KEY,
    section VARCHAR(256) NOT NULL
);

CREATE TABLE Material (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(256) NOT NULL
);

CREATE TABLE Shelf (
	id INT AUTO_INCREMENT PRIMARY KEY,
    location_id INT NOT NULL,
    material_id INT NOT NULL,
    main_topic_id INT NOT NULL,
    books INTEGER,
    max_capacity INTEGER,
    
    FOREIGN KEY (location_id) REFERENCES Location(id),
    FOREIGN KEY (material_id) REFERENCES Material(id),
    FOREIGN KEY (main_topic_id) REFERENCES Topic(id)
);

CREATE TABLE Book (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    author VARCHAR(256),
    status_id INT NOT NULL,
    shelf_id INT NOT NULL,
    topic_id INT NOT NULL,
    
    FOREIGN KEY (status_id) REFERENCES Status(id),
    FOREIGN KEY (shelf_id) REFERENCES Shelf(id),
    FOREIGN KEY (topic_id) REFERENCES Topic(id)
);

CREATE TABLE Student (
	id INT AUTO_INCREMENT PRIMARY KEY,
    dni VARCHAR(256) NOT NULL UNIQUE,
    name VARCHAR(256),
    last_name VARCHAR(256),
    email VARCHAR(256) NOT NULL UNIQUE
);

CREATE TABLE Loan (
	id INT AUTO_INCREMENT PRIMARY KEY,
    book_id INT NOT NULL,
    student_id INT NOT NULL,
    load_date DATE,
    estimated_return_date DATE,
    actual_return_date DATE,
    
	FOREIGN KEY (book_id) REFERENCES Book(id),
    FOREIGN KEY (student_id) REFERENCES Student(id)
);