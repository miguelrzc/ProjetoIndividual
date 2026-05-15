CREATE DATABASE peniel;

USE peniel;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE devocional (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    fk_passagem INT,
    fk_categoria INT,
    reflexao TEXT,
    data_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_usu_dev FOREIGN KEY (fk_usuario) REFERENCES usuarios(id),
    CONSTRAINT fk_pass_dev FOREIGN KEY (fk_passagem) REFERENCES passagens(id),
    CONSTRAINT fk_cat_dev FOREIGN KEY (fk_categoria) REFERENCES categorias(id)
);


CREATE TABLE categorias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE passagens (
    id INT PRIMARY KEY AUTO_INCREMENT,
    livro VARCHAR(50) NOT NULL,
    capitulo INT NOT NULL,
    versiculo INT NOT NULL,
    texto TEXT NOT NULL
);

CREATE TABLE streaks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    data_ultima_entrada DATE,
    sequencia_atual INT DEFAULT 0,
    CONSTRAINT fk_usu_streak FOREIGN KEY (fk_usuario) REFERENCES usuarios(id)
);

