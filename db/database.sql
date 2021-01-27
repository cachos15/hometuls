CREATE DATABASE IF NOT EXISTS hometuls;

USE hometuls;

CREATE TABLE records(
	id varchar(36) NOT NULL,
	uuid varchar(50),
	categoryA varchar(5) NOT NULL,
	categoryB varchar(5) NOT NULL,
	categoryC varchar(50),
	subCategory varchar(60),
	institutionName varchar(60),
	comments varchar(200),
	politicA varchar(50),
	politicB varchar(50),
	politicC varchar(50),
	anonymus boolean,
	name varchar(60) NOT NULL,
	email varchar(100) NOT NULL,
	phone int(10) NOT NULL,
	code_state int(5) NOT NULL,
	code_city int(5),
	gender varchar(1),
	ip_address varchar(15) NOT NULL,
	ip_info varchar(200),
	date int(20),
	image varchar(200),
	staName varchar(50),
	citName varchar(50),
	citId int(5),
	latitude decimal(20) NOT NULL,
	longitude decimal(20) NOT NULL,
	locInfo varchar(50),
	countItems int(5),
	fileRecords varchar(50),
    PRIMARY KEY(id)
    );
    