CREATE TABLE users (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	firstname VARCHAR(255) NOT NULL,
	lastname VARCHAR(255) NOT NULL,
	username VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NULL,
	balance DECIMAL(15,2) NULL,
	created_at TIMESTAMP NULL,
	updated_at TIMESTAMP NULL

);

INSERT INTO `users` (`id`, `firstname`, `lastname`, `username`, `email`, `password`, `balance`, `created_at`, `updated_at`) VALUES ('1', 'Alex', 'Jones', 'alex_707', 'alex.jones@gmail.com', '$2y$10$Ki3yGnCj9vCYkWXWEgNDZeS3WnTwhJOIbLc/yeGpJkXgwP4/jGAly', '100', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO `users` (`id`, `firstname`, `lastname`, `username`, `email`, `password`, `balance`, `created_at`, `updated_at`) VALUES ('2', 'Bob', 'Cooper', 'cooper_b', 'bob.cooper@gmail.com', '$2y$10$Ki3yGnCj9vCYkWXWEgNDZeS3WnTwhJOIbLc/yeGpJkXgwP4/jGAly', '102', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO `users` (`id`, `firstname`, `lastname`, `username`, `email`, `password`, `balance`, `created_at`, `updated_at`) VALUES ('3', 'Cassidy', 'Grayson', 'gray', 'cassidy.grayson@gmail.com', '$2y$10$Ki3yGnCj9vCYkWXWEgNDZeS3WnTwhJOIbLc/yeGpJkXgwP4/jGAly', '121', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO `users` (`id`, `firstname`, `lastname`, `username`, `email`, `password`, `balance`, `created_at`, `updated_at`) VALUES ('4', 'Daniella', 'Georgette', 'dani_86', 'daniella.georgette@gmail.com', '$2y$10$Ki3yGnCj9vCYkWXWEgNDZeS3WnTwhJOIbLc/yeGpJkXgwP4/jGAly', '200', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO `users` (`id`, `firstname`, `lastname`, `username`, `email`, `password`, `balance`, `created_at`, `updated_at`) VALUES ('5', 'Steve', 'Manette', 'smanette', 'steve.manette@gmail.com', '$2y$10$Ki3yGnCj9vCYkWXWEgNDZeS3WnTwhJOIbLc/yeGpJkXgwP4/jGAly', '130', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

CREATE TABLE topics (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(30) NOT NULL,
	body TEXT NOT NULL,
	reg_date TIMESTAMP
);

INSERT INTO `topics` (`id`, `title`, `body`, `reg_date`) VALUES ('1', 'Topic 1', 'Topic 1 Text Body', CURRENT_TIMESTAMP);
INSERT INTO `topics` (`id`, `title`, `body`, `reg_date`) VALUES ('2', 'Topic 2', 'Topic 2 Text Body', CURRENT_TIMESTAMP);
INSERT INTO `topics` (`id`, `title`, `body`, `reg_date`) VALUES ('3', 'Topic 3', 'Topic 3 Text Body', CURRENT_TIMESTAMP);
INSERT INTO `topics` (`id`, `title`, `body`, `reg_date`) VALUES ('4', 'Topic 4', 'Topic 4 Text Body', CURRENT_TIMESTAMP);

/*
COURSES
- id (INT(11), auto_increment, primary_key)
- title (VARCHAR(100))
- content (TEXT)
- duration (TIME)
- instructor (VARCHAR(100))
- num_lessons (INT)
- thumbnail_url (STRING)
- published_date (DATE)
- created_at (TIMESTAMP, DEFAULT - current_date)
- updated_at (TIMESTAMP, DEFAULT - current_date)
- category_id (INT(11), auto_increment, primary_key)

CATEGORIES
- id (INT(11), auto_increment, primary_key)
- display_name (VARCHAR(100))
- created_at (TIMESTAMP, DEFAULT - current_date)
- updated_at (TIMESTAMP, DEFAULT - current_date)
*/

CREATE TABLE categories (
	id INT AUTO_INCREMENT PRIMARY KEY,
	display_name VARCHAR(255) NULL,
	created_at TIMESTAMP NULL,
	updated_at TIMESTAMP NULL
);

INSERT INTO `categories` (`id`, `display_name`, `created_at`, `updated_at`) 
VALUES ('1', 'Lightroom', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO `categories` (`id`, `display_name`, `created_at`, `updated_at`) 
VALUES ('2', 'Photography', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO `categories` (`id`, `display_name`, `created_at`, `updated_at`) 
VALUES ('3', 'Design', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO `categories` (`id`, `display_name`, `created_at`, `updated_at`) 
VALUES ('4', 'Business', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO `categories` (`id`, `display_name`, `created_at`, `updated_at`) 
VALUES ('5', 'Video', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


CREATE TABLE courses (
	id INT AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	content TEXT NULL,
	duration TIME NULL,
	instructor VARCHAR(255) NULL,
	num_lessons INT(26) NULL,
	thumbnail_url VARCHAR(255) NULL,
    published_date DATE,
	created_at TIMESTAMP NULL,
	updated_at TIMESTAMP NULL,
    category_id INT,
    FOREIGN KEY(category_id) REFERENCES categories(id)
);

INSERT INTO `courses` (`id`, `title`, `content`, `duration`, `instructor`, `num_lessons`, `thumbnail_url`, `published_date`, `created_at`, `updated_at`, `category_id`) 
VALUES ('1', 'occaecat aliqua voluptate', 'Eiusmod dolor aute aliquip consectetur aliqua incididunt. Lorem elit ipsum in minim nisi qui voluptate cillum ea tempor. Qui labore consectetur ad laboris esse aliqua aute enim aliqua mollit esse. Nulla ut officia cillum exercitation voluptate occaecat cupidatat deserunt non. Aliquip dolore et proident eu esse cillum ex aute. Consectetur nostrud est fugiat anim est duis non reprehenderit exercitation esse laborum. Amet ullamco ut sit in nulla voluptate aliqua in in reprehenderit esse.\n\nDolor et ipsum aliquip ea duis ex eu eiusmod. Dolor velit proident laboris ullamco aliqua tempor proident esse. Veniam et ut eiusmod exercitation sunt irure eu consequat in.', '08:00:00', 'Sexton Terry', 17, 'https://placeimg.com/640/480/tech?t=', '2015-08-29', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);
INSERT INTO `courses` (`id`, `title`, `content`, `duration`, `instructor`, `num_lessons`, `thumbnail_url`, `published_date`, `created_at`, `updated_at`, `category_id`) 
VALUES ('2', 'est nisi in', 'Eiusmod dolor aute aliquip consectetur aliqua incididunt. Lorem elit ipsum in minim nisi qui voluptate cillum ea tempor. Qui labore consectetur ad laboris esse aliqua aute enim aliqua mollit esse. Nulla ut officia cillum exercitation voluptate occaecat cupidatat deserunt non. Aliquip dolore et proident eu esse cillum ex aute. Consectetur nostrud est fugiat anim est duis non reprehenderit exercitation esse laborum. Amet ullamco ut sit in nulla voluptate aliqua in in reprehenderit esse.\n\nDolor et ipsum aliquip ea duis ex eu eiusmod. Dolor velit proident laboris ullamco aliqua tempor proident esse. Veniam et ut eiusmod exercitation sunt irure eu consequat in.', '08:00:00', 'Joan Hardin', 7, 'https://placeimg.com/640/480/tech?t=', '2015-08-29', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);
INSERT INTO `courses` (`id`, `title`, `content`, `duration`, `instructor`, `num_lessons`, `thumbnail_url`, `published_date`, `created_at`, `updated_at`, `category_id`) 
VALUES ('3', 'quis quis ullamco', 'Eiusmod dolor aute aliquip consectetur aliqua incididunt. Lorem elit ipsum in minim nisi qui voluptate cillum ea tempor. Qui labore consectetur ad laboris esse aliqua aute enim aliqua mollit esse. Nulla ut officia cillum exercitation voluptate occaecat cupidatat deserunt non. Aliquip dolore et proident eu esse cillum ex aute. Consectetur nostrud est fugiat anim est duis non reprehenderit exercitation esse laborum. Amet ullamco ut sit in nulla voluptate aliqua in in reprehenderit esse.\n\nDolor et ipsum aliquip ea duis ex eu eiusmod. Dolor velit proident laboris ullamco aliqua tempor proident esse. Veniam et ut eiusmod exercitation sunt irure eu consequat in.', '08:00:00', 'Talley Singleton', 11, 'https://placeimg.com/640/480/tech?t=', '2016-03-25', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);
INSERT INTO `courses` (`id`, `title`, `content`, `duration`, `instructor`, `num_lessons`, `thumbnail_url`, `published_date`, `created_at`, `updated_at`, `category_id`) 
VALUES ('4', 'irure excepteur elit', 'Eiusmod dolor aute aliquip consectetur aliqua incididunt. Lorem elit ipsum in minim nisi qui voluptate cillum ea tempor. Qui labore consectetur ad laboris esse aliqua aute enim aliqua mollit esse. Nulla ut officia cillum exercitation voluptate occaecat cupidatat deserunt non. Aliquip dolore et proident eu esse cillum ex aute. Consectetur nostrud est fugiat anim est duis non reprehenderit exercitation esse laborum. Amet ullamco ut sit in nulla voluptate aliqua in in reprehenderit esse.\n\nDolor et ipsum aliquip ea duis ex eu eiusmod. Dolor velit proident laboris ullamco aliqua tempor proident esse. Veniam et ut eiusmod exercitation sunt irure eu consequat in.', '08:00:00', 'Poole Sullivan', 14, 'https://placeimg.com/640/480/tech?t=', '2016-06-15', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);
INSERT INTO `courses` (`id`, `title`, `content`, `duration`, `instructor`, `num_lessons`, `thumbnail_url`, `published_date`, `created_at`, `updated_at`, `category_id`) 
VALUES ('5', 'dolore aliquip pariatur', 'Eiusmod dolor aute aliquip consectetur aliqua incididunt. Lorem elit ipsum in minim nisi qui voluptate cillum ea tempor. Qui labore consectetur ad laboris esse aliqua aute enim aliqua mollit esse. Nulla ut officia cillum exercitation voluptate occaecat cupidatat deserunt non. Aliquip dolore et proident eu esse cillum ex aute. Consectetur nostrud est fugiat anim est duis non reprehenderit exercitation esse laborum. Amet ullamco ut sit in nulla voluptate aliqua in in reprehenderit esse.\n\nDolor et ipsum aliquip ea duis ex eu eiusmod. Dolor velit proident laboris ullamco aliqua tempor proident esse. Veniam et ut eiusmod exercitation sunt irure eu consequat in.', '08:00:00', 'Ellis Jenkins', 14, 'https://placeimg.com/640/480/tech?t=', '2017-08-15', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);
INSERT INTO `courses` (`id`, `title`, `content`, `duration`, `instructor`, `num_lessons`, `thumbnail_url`, `published_date`, `created_at`, `updated_at`, `category_id`) 
VALUES ('6', 'id veniam culpa', 'Eiusmod dolor aute aliquip consectetur aliqua incididunt. Lorem elit ipsum in minim nisi qui voluptate cillum ea tempor. Qui labore consectetur ad laboris esse aliqua aute enim aliqua mollit esse. Nulla ut officia cillum exercitation voluptate occaecat cupidatat deserunt non. Aliquip dolore et proident eu esse cillum ex aute. Consectetur nostrud est fugiat anim est duis non reprehenderit exercitation esse laborum. Amet ullamco ut sit in nulla voluptate aliqua in in reprehenderit esse.\n\nDolor et ipsum aliquip ea duis ex eu eiusmod. Dolor velit proident laboris ullamco aliqua tempor proident esse. Veniam et ut eiusmod exercitation sunt irure eu consequat in.', '08:00:00', 'Gentry Curry', 18, 'https://placeimg.com/640/480/tech?t=', '2017-03-06', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4);
INSERT INTO `courses` (`id`, `title`, `content`, `duration`, `instructor`, `num_lessons`, `thumbnail_url`, `published_date`, `created_at`, `updated_at`, `category_id`) 
VALUES ('7', 'id officia officia', 'Eiusmod dolor aute aliquip consectetur aliqua incididunt. Lorem elit ipsum in minim nisi qui voluptate cillum ea tempor. Qui labore consectetur ad laboris esse aliqua aute enim aliqua mollit esse. Nulla ut officia cillum exercitation voluptate occaecat cupidatat deserunt non. Aliquip dolore et proident eu esse cillum ex aute. Consectetur nostrud est fugiat anim est duis non reprehenderit exercitation esse laborum. Amet ullamco ut sit in nulla voluptate aliqua in in reprehenderit esse.\n\nDolor et ipsum aliquip ea duis ex eu eiusmod. Dolor velit proident laboris ullamco aliqua tempor proident esse. Veniam et ut eiusmod exercitation sunt irure eu consequat in.', '08:00:00', 'Oneal Harrison', 14, 'https://placeimg.com/640/480/tech?t=', '2017-09-17', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);
INSERT INTO `courses` (`id`, `title`, `content`, `duration`, `instructor`, `num_lessons`, `thumbnail_url`, `published_date`, `created_at`, `updated_at`, `category_id`) 
VALUES ('8', 'fugiat aute magna', 'Eiusmod dolor aute aliquip consectetur aliqua incididunt. Lorem elit ipsum in minim nisi qui voluptate cillum ea tempor. Qui labore consectetur ad laboris esse aliqua aute enim aliqua mollit esse. Nulla ut officia cillum exercitation voluptate occaecat cupidatat deserunt non. Aliquip dolore et proident eu esse cillum ex aute. Consectetur nostrud est fugiat anim est duis non reprehenderit exercitation esse laborum. Amet ullamco ut sit in nulla voluptate aliqua in in reprehenderit esse.\n\nDolor et ipsum aliquip ea duis ex eu eiusmod. Dolor velit proident laboris ullamco aliqua tempor proident esse. Veniam et ut eiusmod exercitation sunt irure eu consequat in.', '08:00:00', 'Melissa Peck', 16, 'https://placeimg.com/640/480/tech?t=', '2016-03-16', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);
INSERT INTO `courses` (`id`, `title`, `content`, `duration`, `instructor`, `num_lessons`, `thumbnail_url`, `published_date`, `created_at`, `updated_at`, `category_id`) 
VALUES ('9', 'non proident aliquip', 'Eiusmod dolor aute aliquip consectetur aliqua incididunt. Lorem elit ipsum in minim nisi qui voluptate cillum ea tempor. Qui labore consectetur ad laboris esse aliqua aute enim aliqua mollit esse. Nulla ut officia cillum exercitation voluptate occaecat cupidatat deserunt non. Aliquip dolore et proident eu esse cillum ex aute. Consectetur nostrud est fugiat anim est duis non reprehenderit exercitation esse laborum. Amet ullamco ut sit in nulla voluptate aliqua in in reprehenderit esse.\n\nDolor et ipsum aliquip ea duis ex eu eiusmod. Dolor velit proident laboris ullamco aliqua tempor proident esse. Veniam et ut eiusmod exercitation sunt irure eu consequat in.', '08:00:00', 'Brock Wynn', 10, 'https://placeimg.com/640/480/tech?t=', '2016-05-12', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);
INSERT INTO `courses` (`id`, `title`, `content`, `duration`, `instructor`, `num_lessons`, `thumbnail_url`, `published_date`, `created_at`, `updated_at`, `category_id`) 
VALUES ('10', 'culpa dolor anim', 'Eiusmod dolor aute aliquip consectetur aliqua incididunt. Lorem elit ipsum in minim nisi qui voluptate cillum ea tempor. Qui labore consectetur ad laboris esse aliqua aute enim aliqua mollit esse. Nulla ut officia cillum exercitation voluptate occaecat cupidatat deserunt non. Aliquip dolore et proident eu esse cillum ex aute. Consectetur nostrud est fugiat anim est duis non reprehenderit exercitation esse laborum. Amet ullamco ut sit in nulla voluptate aliqua in in reprehenderit esse.\n\nDolor et ipsum aliquip ea duis ex eu eiusmod. Dolor velit proident laboris ullamco aliqua tempor proident esse. Veniam et ut eiusmod exercitation sunt irure eu consequat in.', '08:00:00', 'Herrera Hammond', 8, 'https://placeimg.com/640/480/tech?t=', '2016-04-05', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);
INSERT INTO `courses` (`id`, `title`, `content`, `duration`, `instructor`, `num_lessons`, `thumbnail_url`, `published_date`, `created_at`, `updated_at`, `category_id`) 
VALUES ('11', 'aliqua aliquip dolore', 'Eiusmod dolor aute aliquip consectetur aliqua incididunt. Lorem elit ipsum in minim nisi qui voluptate cillum ea tempor. Qui labore consectetur ad laboris esse aliqua aute enim aliqua mollit esse. Nulla ut officia cillum exercitation voluptate occaecat cupidatat deserunt non. Aliquip dolore et proident eu esse cillum ex aute. Consectetur nostrud est fugiat anim est duis non reprehenderit exercitation esse laborum. Amet ullamco ut sit in nulla voluptate aliqua in in reprehenderit esse.\n\nDolor et ipsum aliquip ea duis ex eu eiusmod. Dolor velit proident laboris ullamco aliqua tempor proident esse. Veniam et ut eiusmod exercitation sunt irure eu consequat in.', '08:00:00', 'Chavez Franklin', 17, 'https://placeimg.com/640/480/tech?t=', '2017-07-07', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);
INSERT INTO `courses` (`id`, `title`, `content`, `duration`, `instructor`, `num_lessons`, `thumbnail_url`, `published_date`, `created_at`, `updated_at`, `category_id`) 
VALUES ('12', 'occaecat fugiat sit', 'Eiusmod dolor aute aliquip consectetur aliqua incididunt. Lorem elit ipsum in minim nisi qui voluptate cillum ea tempor. Qui labore consectetur ad laboris esse aliqua aute enim aliqua mollit esse. Nulla ut officia cillum exercitation voluptate occaecat cupidatat deserunt non. Aliquip dolore et proident eu esse cillum ex aute. Consectetur nostrud est fugiat anim est duis non reprehenderit exercitation esse laborum. Amet ullamco ut sit in nulla voluptate aliqua in in reprehenderit esse.\n\nDolor et ipsum aliquip ea duis ex eu eiusmod. Dolor velit proident laboris ullamco aliqua tempor proident esse. Veniam et ut eiusmod exercitation sunt irure eu consequat in.', '08:00:00', 'Ramsey Cox', 16, 'https://placeimg.com/640/480/tech?t=', '2015-11-06', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4);