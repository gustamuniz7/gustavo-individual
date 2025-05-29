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

-- selecionando os jogadores e a quantidade de jogadores favoritos do usuario
select jogador,COUNT(jogador) as contagem_jogador from usuario group by jogador;



select corretas from quiz;

select jogador from usuario;

select * from quiz;

desc quiz;

SELECT 
    AVG(corretas) AS media_geral
FROM 
    quiz;

