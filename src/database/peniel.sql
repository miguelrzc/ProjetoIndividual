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
    categoria VARCHAR(50), 
    versiculo_texto VARCHAR(255), 
    reflexao TEXT,
    data_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_usu_dev FOREIGN KEY (fk_usuario) REFERENCES usuarios(id)
);


CREATE TABLE comentarios (
    fk_devocional INT PRIMARY KEY, 
    texto_comentario TEXT NOT NULL,
    data_comentario DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_dev_comento FOREIGN KEY (fk_devocional) REFERENCES devocional(id)
);
