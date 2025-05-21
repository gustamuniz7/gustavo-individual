create database if not exists saopaulo;
use saopaulo;

create table usuario (
id int primary key auto_increment,
nome varchar(100),
email varchar(60),
senha varchar(10),
jogador varchar(50)
);


create table quiz(
idtTentativa int primary key auto_increment,
corretas int,
fkusuario int,
foreign key (fkusuario) references usuario(id)
);

select * from usuario;

select * from quiz;

select sum(corretas) from quiz;

