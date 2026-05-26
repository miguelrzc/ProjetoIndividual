CREATE DATABASE peniel;
USE peniel;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE metas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT UNIQUE, 
    meta_total INT DEFAULT 20, 
    CONSTRAINT fk_usu_meta FOREIGN KEY (fk_usuario) REFERENCES usuarios(id)
);

CREATE TABLE categorias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE devocional (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    fk_categoria INT,
    versiculo_texto VARCHAR(255), 
    reflexao TEXT,
    data_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT fk_usu_dev FOREIGN KEY (fk_usuario) REFERENCES usuarios(id),
    CONSTRAINT fk_cat_dev FOREIGN KEY (fk_categoria) REFERENCES categorias(id)
);



INSERT INTO categorias (nome) VALUES 
('Fé'), 
('Gratidão'), 
('Oração'), 
('Estudo Bíblico'),
('Sabedoria'),
('Propósito');

