DROP DATABASE IF EXISTS nodemysql;


CREATE DATABASE nodemysql;

USE  nodemysql;

CREATE TABLE events(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  description varchar(50) NOT NULL,
   category varchar(50) NOT NULL,
   comments varchar(50) NOT NULL,
   email varchar(50)NOT NULL,
   phone varchar(10)NOT NULL,

  PRIMARY KEY (ID)
);

 INSERT INTO events (name, description, category, comments, email, phone)  VALUES ("Henry", "Hondureño", "man", "student", "tot@hotmail.com", "0000000000");

  CREATE TABLE IF NOT EXISTS eventform(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    activity varchar(50) NOT NULL,
    dateTime varchar(50) NOT NULL,
    inviteType varchar(50) NOT NULL,
    contactInfo varchar(50) NOT NULL,
    PRIMARY KEY (ID)
  );

INSERT INTO eventform (name, activity, dateTime, inviteType, contactInfo) VALUES ("holacode", "Code-off", "12:30", "Open", "4451576440");

  CREATE TABLE booking(
  id int NOT NULL AUTO_INCREMENT,
  company varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  reason varchar(50) NOT NULL,
  hour varchar(50) NOT NULL,
  date varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);
INSERT INTO booking (company,name,reason,hour,date) VALUES ("Holacode","B","Meeting","duh","duh");

 CREATE TABLE counter(
 id int NOT NULL AUTO_INCREMENT,
 likes int NOT NULL,
 PRIMARY KEY (ID)
);
INSERT INTO counter (likes) VALUES ("1");
