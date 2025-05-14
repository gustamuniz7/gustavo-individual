create database if not exists saopaulo;
use saopaulo;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(100),
email varchar(60),
senha varchar(10)
);

create table pergunta(
id int primary key auto_increment,
pergunta varchar(100)
);

create table resposta(
id int primary key auto_increment,
fkpergunta int,
respostas varchar(100),
corretas int,
foreign key (fkpergunta) references pergunta(id)
);

create table resposta_usuario(
id int primary key auto_increment,
fkusuario int,
fkpergunta int,
fkresposta int,
acertou int,
foreign key (fkusuario) references usuario(idUsuario),
foreign key (fkpergunta) references pergunta(id),
foreign key(fkresposta) references resposta(id)
);

drop database saopaulo;


