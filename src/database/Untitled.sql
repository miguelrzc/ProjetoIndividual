CREATE DATABASE relnn;

use relnn;

CREATE TABLE aluno (
idAluno INT PRIMARY KEY auto_increment,
nome VARCHAR(45)
); 

INSERT INTO aluno (nome) VALUES 
('Anne'),
('Isabela'); 

CREATE TABLE curso (
idCurso INT PRIMARY KEY auto_increment,
nome varchar(45)
) auto_increment = 1000; 

INSERT INTO curso (nome) VALUES 
('Inglês'),
('Espanhol'),
('Mandarim'); 

-- TABELA ASSOCIATIVA 
CREATE TABLE matricula (
idMatricula INT,
fkAluno INT, 
fkCurso INT,
constraint pkcomposta primary key ( idMatricula, fkAluno, fkCurso), 
nivel varchar(45),
statuss varchar(45),
nota decimal (4,2),
dtMatricula DATE,
constraint fkAlunoMat foreign key (fkAluno)
references aluno (idAluno),
constraint fkCursoMat foreign key (fkCurso)
references curso(idCurso)
); 

ALTER TABLE matricula modify column idMatricula int auto_increment; 

INSERT INTO matricula VALUES 
(default, 1, 1000, 'Iniciante', 'aprovado', 9.1, '2025-01-01'), 
(default, 1, 1000, 'IntermediárioIntermediário', 'em andamento', null, '2026-01-01'), 
(default, 2, 1000, 'Intermediário', 'em andamento', null, '2026-01-01'), 
(default, 2, 1001, 'Iniciante', 'em andamento', 3.3, '2025-01-01'), 
(default, 2, 1002, 'Avançado', 'reprovado', 4.5, '2025-01-01');

INSERT INTO matricula VALUES
(default, 1, 1001, 'Iniciante', 'aprovado', 9.1, '2024-01-01');

INSERT INTO matricula VALUES
(default, 1, 1002, 'Iniciante', 'reprovado', 4.8, '2024-01-01');

INSERT INTO matricula VALUES
(default, 2, 1002, 'Avançado', 'em andamento', 0.86, '2026-01-01');


SELECT curso.nome as Curso,
aluno.nome as Aluno,
nota, 
statuss,
nivel
FROM aluno JOIN matricula
ON idAluno = fkAluno
JOIN curso
ON idCurso = fkCurso;

SELECT min(nota) as MenorNota,
max(nota) as MaiorNota
from matricula;

SELECT count(nota) FROM matricula;

select distinct (nota) from matricula;

SELECT sum(nota) as Soma,
avg(nota) as Média
From matricula;

SELECT avg(nota),round(avg(nota), 2) as MédiaRound,
truncate(avg(nota),2) as MédiaTruncada 
from matricula;

SELECT fkAluno, avg(nota)
FROM aluno JOIN matricula
ON idAluno = fkAluno
group by fkAluno;

SELECT count(distinct nota) from matricula
order by nota desc limit 1;

SELECT dtMatricula, count(distinct dtmatricula) from matricula 
group by dtmatricula ORDER By dtmatricula asc limit 1;

-- DESAFIO 
-- EXIBIR AS NOTAS E O ALUNO DE TODOS OS ALUNOS QUE POSSUEM A NOTA MAIOR QUE A MÉDIA 

SELECT fkAluno, nota from matricula where nota > (SELECT avg(nota) FROM matricula);

SELECT fkAluno, nivel, avg(nota)
from matricula 
group by fkAluno, nivel, nota
HAVING avg(nota) > 5;

CREATE TABLE medicos (
    id_medico INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    especialidade VARCHAR(50) NOT NULL
);

CREATE TABLE pacientes (
    id_paciente INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nascimento DATE NOT NULL
);

CREATE TABLE consultas (
    id_consulta INT,
    id_medico INT,
    id_paciente INT,
    data DATE NOT NULL,
    hora TIME NOT NULL,
    PRIMARY KEY (id_consulta, id_medico, id_paciente),
    FOREIGN KEY (id_medico) REFERENCES medicos(id_medico),
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id_paciente)
);


    
SELECT 
    c.id_consulta, 
    m.nome AS nome_medico, 
    p.nome AS nome_paciente, 
    c.data AS data_consulta, 
    c.hora AS hora_consulta
FROM 
    consultas c
JOIN 
    medicos m ON c.id_medico = m.id_medico
JOIN 
    pacientes p ON c.id_paciente = p.id_paciente;
    
    CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE produtos (
    id_produto INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL
);

CREATE TABLE pedidos (
    id_pedido INT PRIMARY KEY,
    id_cliente INT NOT NULL,
    data DATE NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);



CREATE TABLE itens_pedido (
    id_itens_pedido INT,
    id_pedido INT,
    id_produto INT,
    quantidade INT NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);

ALTER TABLE itens_pedido ADD CONSTRAINT pk_composta PRIMARY KEY (id_pedido, id_produto);

ALTER TABLE itens_pedido ADD CONSTRAINT pk_composta PRIMARY KEY (id_itens_pedido);

ALTER TABLE itens_pedido ADD CONSTRAINT pk_composta PRIMARY KEY (id_cliente, id_pedido, id_produto);

ALTER TABLE itens_pedido ADD CONSTRAINT pk_composta PRIMARY KEY (id_itens_pedido, id_cliente, id_pedido, id_produto);

ALTER TABLE itens_pedido ADD CONSTRAINT pk_composta PRIMARY KEY (id_itens_pedido, id_pedido, id_produto);

CREATE TABLE alunos (
    id INT PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE cursos (
    id INT PRIMARY KEY,
    titulo VARCHAR(100)
);

CREATE TABLE matriculas (
    aluno_id INT,
    curso_id INT,
    data_matricula DATE,
    PRIMARY KEY (aluno_id, curso_id),
    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

SELECT nome, titulo
FROM alunos, cursos, matriculas
WHERE alunos.id = cursos.id;

SELECT nome, titulo
FROM alunos
JOIN cursos ON alunos.id = cursos.id;

SELECT a.nome, c.titulo
FROM matriculas m
JOIN alunos a ON m.curso_id = a.id
JOIN cursos c ON m.aluno_id = c.id;

SELECT a.nome, c.titulo
FROM alunos a
JOIN matriculas m ON a.id = m.aluno_id
JOIN cursos c ON m.curso_id = c.id;


CREATE TABLE aluno (
    id_aluno INT,
    nome VARCHAR(100)
);

CREATE TABLE disciplina (
    id_disciplina INT,
    nome VARCHAR(100)
);

CREATE TABLE projeto(
id_projeto INT PRIMARY KEY,
nome_projeto varchar(45),
data_inicio date,
data_fim date
); 

create table funcionario (
id_funcionario int primary key, 
nome_funcionario varchar(45),
cargo varchar(45)
); 

create table alocacao(
id_projeto int , 
id_funcionario int, 
horas_semanais INT
) ;

SELECT 
    p.nome_projeto,
    f.nome_funcionario,
    a.horas_semanais
FROM
    projeto p
JOIN 
    funcionario f ON a.id_projeto = p.id_projeto
JOIN 
    alocacao ON a.id_funcionario = f.id_funcionario
ORDER BY 
    p.nome_projeto;SELECT 
    nome_projeto,
    nome_funcionario,
    horas_semanais
FROM 
    projeto p
JOIN 
    funcionario f ON a.id_funcionario = f.id_funcionario
ORDER BY 
    p.nome_projeto;
    
    SELECT 
    p.nome_projeto,
    f.nome_funcionario,
    a.horas_semanais
FROM 
    alocacoes a
JOIN 
    projetos p ON a.id_projeto = p.id_projeto
AND
    funcionarios f ON a.id_funcionario = f.id_funcionario;
    
    SELECT 
    p.nome_projeto,
    f.nome_funcionario,
    a.horas_semanais
FROM 
    alocacoes a
JOIN 
    projetos p ON a.id_funcionario = p.id_projeto
JOIN 
    funcionarios f ON a.id_projeto = f.id_funcionario;SELECT 
    p.nome_projeto,
    f.nome_funcionario,
    a.horas_semanais
FROM 
    alocacao a
JOIN 
    projeto p ON a.id_projeto = p.id_projeto
JOIN 
    funcionario f ON a.id_funcionario = f.id_funcionario
ORDER BY 
    p.nome_projeto
    
    
    SELECT 
    p.nome_projeto,
    f.nome_funcionario,
    a.horas_semanais
FROM 
    alocacao a
JOIN 
    projeto p ON a.id_projeto = p.id_projeto
JOIN 
    funcionario f ON a.id_funcionario = f.id_funcionario
ORDER BY 
    p.nome_projeto;
    
    SELECT 
    p.nome_projeto,
    f.nome_funcionario,
    a.horas_semanais
FROM
    projeto p
JOIN 
    funcionario f ON a.id_projeto = p.id_projeto
JOIN 
    alocacao ON a.id_funcionario = f.id_funcionario
ORDER BY 
    p.nome_projeto;
    
    SELECT 
    nome_projeto,
    nome_funcionario,
    horas_semanais
FROM 
    projeto p
JOIN 
    funcionario f ON a.id_funcionario = f.id_funcionario
ORDER BY 
    p.nome_projeto;
    
    

CREATE TABLE medicos (
    id_medico INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    especialidade VARCHAR(50) NOT NULL
);

CREATE TABLE pacientes (
    id_paciente INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nascimento DATE NOT NULL
);

CREATE TABLE consultas (
    id_consulta INT,
    id_medico INT,
    id_paciente INT,
    data DATE NOT NULL,
    hora TIME NOT NULL,
    PRIMARY KEY (id_consulta, id_medico, id_paciente),
    FOREIGN KEY (id_medico) REFERENCES medicos(id_medico),
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id_paciente)
);

SELECT 
    c.id_consulta, 
    m.nome AS nome_medico, 
    p.nome AS nome_paciente, 
    c.data AS data_consulta, 
    c.hora AS hora_consulta
FROM 
    consultas c
JOIN 
    medicos m ON c.id_medico = m.id_medico
JOIN 
    pacientes p ON c.id_paciente = p.id_paciente;
    
    SELECT 
    id_consulta, 
    nome AS nome_medico, 
    nome AS nome_paciente, 
    concat(data, ' ', hora) AS dataHora_consulta
FROM 
    consultas c
JOIN 
    medicos m 
JOIN 
    pacientes p
    
    SELECT 
    c.id_consulta, 
    m.nome AS nome_medico, 
    p.nome AS nome_paciente, 
    c.data AS data_consulta, 
    c.hora AS hora_consulta
FROM 
    consultas c
JOIN 
    medicos m ON id_medico = fkmedico
JOIN 
    pacientes p ON id_paciente = fkpaciente;
    
    SELECT 
    id_consulta, 
    nome AS nome_medico, 
    nome AS nome_paciente, 
    data AS data_consulta, 
    hora AS hora_consulta
FROM 
    consultas
JOIN 
    medicos ON id_medico = id_medico
JOIN 
    pacientes ON id_paciente = id_paciente;
    
    SELECT 
    c.id_consulta, 
    m.nome AS nome_medico, 
    p.nome AS nome_paciente, 
    c.data AS data_consulta, 
    c.hora AS hora_consulta
FROM 
    pacientes p
JOIN 
    medicos m ON c.id_medico = p.id_paciente
JOIN 
    consultas c ON c.id_paciente = p.id_paciente;
    
    
CREATE TABLE voo (
    id INT PRIMARY KEY,
    origem VARCHAR(100),
    destino VARCHAR(100),
    data_voo DATE
);


CREATE TABLE voo (
    id INT PRIMARY KEY,
    origem VARCHAR(100),
    destino VARCHAR(100),
    data_voo DATE
);

CREATE TABLE passagem (
    id INT PRIMARY KEY,
    voo_id INT,
    preco DECIMAL(10,2),
    FOREIGN KEY (voo_id) REFERENCES voo(id)
);

SELECT v.origem, v.destino, MIN(p.preco) AS menor_preco
FROM passagem p
JOIN voo v ON p.voo_id = v.id
WHERE v.data_voo BETWEEN '2025-05-01' AND '2025-05-15'
GROUP BY v.origem, v.destino;

SELECT v.origem, v.destino, MIN(p.preco) AS menor_preco
FROM passagem p
JOIN voo v ON p.voo_id = v.id
WHERE v.data_voo >= 2025-05-01 AND v.data_voo <= 2025-05-15
GROUP BY v.origem, v.destino;

    SELECT v.origem, v.destino, MIN(p.preco) AS menor_preco
FROM passagem p
JOIN voo v ON p.voo_id = v.id
WHERE v.data_voo < '2025-05-01' AND v.data_voo > '2025-05-15'
GROUP BY v.origem, v.destino;


USE corecao;

CREATE TABLE aluno (
    id INT PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE disciplina (
    id INT PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE notas (
    aluno_id INT,
    disciplina_id INT,
    nota DECIMAL(4,2),
    PRIMARY KEY (aluno_id, disciplina_id),
    FOREIGN KEY (aluno_id) REFERENCES aluno(id),
    FOREIGN KEY (disciplina_id) REFERENCES disciplina(id)
);

SELECT d.nome, AVG(n.nota)
FROM notas n
JOIN disciplina d ON n.disciplina_id = d.id
GROUP BY d.nome
WHERE AVG(n.nota) >= 7.0;

SELECT d.nome, n.nota
FROM notas n
JOIN disciplina d ON n.disciplina_id = d.id
GROUP BY d.nome
HAVING n.nota >= 7.0;SELECT d.nome, AVG(n.nota) AS media
FROM notas n
JOIN disciplina d ON n.disciplina_id = d.id
GROUP BY d.nome
HAVING AVG(n.nota) >= 7.0;

SELECT d.nome, AVG(n.nota)
FROM notas n
JOIN disciplina d ON n.disciplina_id = d.id
WHERE AVG(n.nota) >= 7.0
GROUP BY d.nome;


CREATE TABLE funcionarios (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    area VARCHAR(50),
    salario DECIMAL(10,2)
);


SELECT area, salario
FROM funcionarios
GROUP BY area
HAVING salario > 3000;





SELECT area, AVG(salario)
FROM funcionarios
WHERE AVG(salario) > 3000
GROUP BY area;


SELECT area, AVG(salario)
FROM funcionarios
WHERE AVG(salario) > 3000
GROUP BY area;


SELECT area, AVG(salario) AS media_salarial
FROM funcionarios
GROUP BY area
HAVING AVG(salario) > 3000;

CREATE TABLE cliente (
    id INT PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE presenca (
    id INT PRIMARY KEY,
    cliente_id INT,
    data_presenca DATE,
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);


SELECT c.nome, COUNT(*) AS total_presencas
FROM cliente c
JOIN presenca p ON c.id = p.cliente_id
WHERE MONTH(p.data_presenca) = 3
GROUP BY c.nome
ORDER BY total_presencas DESC;

SELECT c.nome, COUNT(p.id) AS total_presencas
FROM cliente c
JOIN presenca p ON c.id = p.cliente_id
WHERE p.data_presenca LIKE '2025-03%'
GROUP BY c.nome
ORDER BY total_presencas DESC;


CREATE TABLE cliente (
    id INT PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE presenca (
    id INT PRIMARY KEY,
    cliente_id INT,
    data_presenca DATE,
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);

INSERT INTO cliente values
(1, 'Miguel'),
(2, 'Anne'),
(3, 'Daniel'); 

INSERT INTO cliente VALUES 
(4, 'gabriel'); 

INSERT INTO presenca VALUES
(4, 4, '2024-03-01');

INSERT INTO presenca VALUES
(1, 1, '2025-03-01'),
(2, 2, '2025-03-01'),
(3,3, '2025-04-01'); SELECT c.nome, COUNT(p.id) AS total_presencas
FROM cliente c
JOIN presenca p ON c.id = p.cliente_id
WHERE p.data_presenca BETWEEN '2025-03-01' AND '2025-03-31'
GROUP BY c.nome
ORDER BY total_presencas DESC;

SELECT c.nome, COUNT(p.id) AS total_presencas
FROM cliente c
JOIN presenca p ON c.id = p.cliente_id
WHERE p.data_presenca LIKE '2025-03%'
GROUP BY c.nome
ORDER BY total_presencas DESC;

SELECT c.nome, COUNT(*) AS total_presencas
FROM cliente c
JOIN presenca p ON c.id = p.cliente_id
WHERE MONTH(p.data_presenca) = 3
GROUP BY c.nome
ORDER BY total_presencas DESC;



USE aula3;


CREATE TABLE colaborador (
    id INT PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE venda (
    id INT PRIMARY KEY,
    colaborador_id INT,
    data DATE,
    valor_total DECIMAL(10,2),
    comissao DECIMAL(10,2),
    FOREIGN KEY (colaborador_id) REFERENCES colaborador(id)
);


SELECT c.nome, SUM(v.comissao)
FROM venda v
JOIN colaborador c ON v.colaborador_id = c.id
GROUP BY c.nome
WHERE SUM(v.comissao) > 1000;




SELECT c.nome, v.comissao
FROM venda v
JOIN colaborador c ON v.colaborador_id = c.id
GROUP BY c.nome
HAVING v.comissao > 1000;



SELECT c.nome, SUM(v.comissao) AS total_comissao
FROM venda v
JOIN colaborador c ON v.colaborador_id = c.id
WHERE v.comissao > 1000
GROUP BY c.nome;


SELECT c.nome, SUM(v.comissao) AS total_comissao
FROM venda v
JOIN colaborador c ON v.colaborador_id = c.id
GROUP BY c.nome
HAVING SUM(v.comissao) > 1000;

CREATE TABLE funcionario (
    id INT PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE ponto (
    funcionario_id INT,
    data DATE,
    horas_extras DECIMAL(4,2),
    PRIMARY KEY (funcionario_id, data),
    FOREIGN KEY (funcionario_id) REFERENCES funcionario(id)
);


SELECT f.nome, MONTH(p.data) AS mes, SUM(p.horas_extras) AS total
FROM ponto p
JOIN funcionario f ON p.funcionario_id = f.id
GROUP BY f.nome, MONTH(p.data)
HAVING SUM(p.horas_extras) > 10;




SELECT f.nome, MONTH(p.data), SUM(p.horas_extras)
FROM ponto p
JOIN funcionario f ON p.funcionario_id = f.id
GROUP BY f.nome
HAVING SUM(p.horas_extras) > 10;



SELECT f.nome, MONTH(p.data) AS mes, SUM(p.horas_extras) AS total
FROM ponto p
JOIN funcionario f ON p.funcionario_id = f.id
GROUP BY f.nome, mes
HAVING total > 10;


SELECT f.nome, MONTH(p.data) AS mes, SUM(p.horas_extras)
FROM ponto p
JOIN funcionario f ON p.funcionario_id = f.id
WHERE SUM(p.horas_extras) > 10
GROUP BY f.nome, MONTH(p.data);

use aula9;

use estoque;
