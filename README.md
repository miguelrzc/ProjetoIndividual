<p align="center">
  <img src="https://user-images.githubusercontent.com/46379117/192358781-9ca879e4-e55e-4d0d-b876-f9a4a2ed9ae8.png" width="600px">
</p>

# 📖 Peniel — Encontro com Deus
> **Web Data Visualization — Projeto Individual (1º Semestre SPTech)**

O **Peniel** é um espaço digital focado no desenvolvimento pessoal e bem-estar, desenhado para incentivar o hábito intencional de leitura, reflexão e escrita diária. A plataforma atua como um diário interativo guiado que afasta o usuário de estímulos de dopamina rápida das redes sociais.

<<<<<<< HEAD
Index: https://private-user-images.githubusercontent.com/262813814/609335554-88a4a53c-67fd-496c-a19c-7e7cab28e31e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODE3MTUxNDIsIm5iZiI6MTc4MTcxNDg0MiwicGF0aCI6Ii8yNjI4MTM4MTQvNjA5MzM1NTU0LTg4YTRhNTNjLTY3ZmQtNDk2Yy1hMTljLTdlN2NhYjI4ZTMxZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNjE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDYxN1QxNjQ3MjJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YmYzMmRhNzFkNTk5YzFhODU3ZGU1MmNjYTBjN2U1MDg2MzVjY2QzMDM4MTJhMDM5ZjliODQyYWZiY2FiN2U4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.vB9Rvp0JyAphVZcWriOMhn-G69HJ1RycpGC3ct7gKp8

=======
[Index: https://github.com/miguelrzc/ProjetoIndividual/issues/4
](https://github.com/miguelrzc/ProjetoIndividual/issues/4)
>>>>>>> 5cafef8fa7dce0d9f2dd60b4edff0925dba8d0db


### 🌐 Vínculo com a ODS 3 da ONU (Saúde e Bem-Estar)
O projeto conecta-se diretamente com a **Meta 3.4 da ODS 3**, atuando na promoção da saúde mental e do bem-estar subjetivo. Através da escrita expressiva e do acompanhamento analítico, a plataforma funciona como uma ferramenta de regulação emocional e autoconhecimento para reduzir o estresse e a ansiedade no cotidiano acadêmico e pessoal.

---

## 🛠️ Tecnologias Utilizadas

O projeto utiliza uma arquitetura baseada no padrão **MVC (Model-View-Controller)** para garantir o fluxo de dados:

* **Front-end (View):** HTML5, CSS3 (com variáveis escopo nativas) e JavaScript Vanilla.
* **Gráficos:** API do `Chart.js` para renderização das métricas de performance.
* **Back-end:** Node.js com framework Express.
* **Banco de Dados (Model):** MySQL Server estruturado e persistido em ambiente de Máquina Virtual (Ubuntu Linux).

---


# 🚀 Como Executar o Projeto

1. **Clone este repositório** em sua máquina.

2. **Crie as tabelas necessárias** no seu Banco de Dados MySQL.
   - Siga rigorosamente as instruções contidas no arquivo **`/src/database/script-tabelas.sql`**.

3. **Parametrizar o ambiente:** Acesse o arquivo **`app.js`** na raiz do projeto:
   - Se for utilizar o **Ambiente de Desenvolvimento (local)**, comente a linha 1 e certifique-se de que a linha 2 está habilitada com: `let ambiente_processo = 'desenvolvimento';`

4. **Configuração de Credenciais:** Adicione as suas credenciais de acesso ao Banco de Dados criando ou alterando o arquivo **`.env`** ou **`.env.dev`**.

5. **Instale as dependências e inicie o servidor:** Abra o terminal na raiz do projeto e execute:
```bash
npm i
