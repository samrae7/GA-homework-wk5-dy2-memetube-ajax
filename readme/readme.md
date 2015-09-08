
This is a simple database app using sinatra and psql.

Embedded YouTube videos (the theme is classic dance films/videos) can be viewed, added, edited and deleted.


My notes:

2 ways to link up your database with the instructions written in the sublime file


1) create database in the terminal
`psql -d my_database -f sublime_file.sql` will: hook up psql with your database my_database and then run on this database all the commands specified in the sublime_file.sql
consequently, this will not work if you did not previously create this database…   `createdb my_database`


2) do it all in the sublime file
Write at the top of sublime_file.sql
```drop database my_database;
create database my_database;
\connect my_database;
-- now here put your commands for table creation, item insertion, etc
```
then in terminal run `psql -f sublime_file.sql` it will: run everything written in your sublime file, where the lines specified abvoe ensure we create the database then connect to it