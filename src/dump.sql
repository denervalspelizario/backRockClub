CREATE DATABASE clubrock;

CREATE TABLE usuarios (
   	uid SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL
);


CREATE TABLE eventos (
 	uid SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  dia DATE NOT NULL,
  descricao TEXT NOT NULL
 )


INSERT INTO eventos (nome, dia, descricao) VALUES
('Rock Collection', '2023-10-01', 'Festa de HALLOWEEN'),
('QUEEN ROCKS', '2023-10-03', 'Maior banda cover do QUEEN do Brasil'),
('Rolls Rock', '2023-10-04', 'Festival anos 80');