drop table videos;

create table videos
(
  id serial8 primary key,
  title varchar(255),
  description text,
  url text,
  genre varchar(255)
);


-- Music
INSERT INTO videos (title, description, genre, url)
  VALUES ('Dirty Dancing - Lover Boy ', 'Spaghetti Arms', 'Eighties', 'oxCDAs3kbAU');

INSERT INTO videos (title, description, genre, url)
  VALUES ('Footloose ', 'Classic eighties movie starring Kevin Bacon', 'eighties', 'wFWDGTVYqE8');

INSERT INTO videos (title, description, genre, url)
  VALUES ('Saturday Night Fever', 'John Travolta at his finest', 'seventies', 'u1qN6gLbUMw');

INSERT INTO videos (title, description, genre, url)
  VALUES ('Singing In the Rain', 'Gene Kelly', 'fifties', 'w40ushYAaYA');

INSERT INTO videos (title, description, genre, url)
  VALUES ('Dirty Dancing - Do You Love Me?', 'Watermelon scene', 'eighties', 'ijK0WTB_-RY');

INSERT INTO videos (title, description, genre, url)
  VALUES ('Billy Elliot ', 'We Love to Boogie dance scene', 'nineties', 'TSTw8wOlBGY');

INSERT INTO videos (title, description, genre, url)
  VALUES ('Summer Stock ', 'Gene Kelly newspaper dance', 'fifties', 'fFJrV3pI5Zs');
