create database if not exists saopaulo;
use saopaulo;

-- Tabela de usuários
create table usuario (
  id int primary key auto_increment,
  nome varchar(100),
  email varchar(60),
  senha varchar(10),
  jogador varchar(50)
);

-- Tabela de tentativas de quiz
create table quiz (
  idTentativa int primary key auto_increment,
  corretas int
);

-- Tabela associativa entre usuário e tentativa
create table registro_usuario (
  fkTentativa int,
  fkUsuario int,
  data_registro datetime default current_timestamp,
  primary key (fkTentativa, fkUsuario),
  foreign key (fkTentativa) references quiz(idTentativa),
  foreign key (fkUsuario) references usuario(id)
);

SELECT q.corretas
FROM quiz q
JOIN registro_usuario r ON q.idTentativa = r.fkTentativa;

select * from registro_usuario;

select * from quiz;

insert into quiz(corretas) values
(1);

select * from quiz;


-- selecionando os jogadores e a quantidade de jogadores favoritos do usuario
select jogador,COUNT(jogador) as contagem_jogador from usuario group by jogador;



select corretas from quiz;

select jogador from usuario;

-- selecionando a media geral de acertos dos usuarios
SELECT 
    AVG(corretas) AS media_geral
FROM 
    quiz;

