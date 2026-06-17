<p align="center">
  <img src="https://user-images.githubusercontent.com/46379117/192358781-9ca879e4-e55e-4d0d-b876-f9a4a2ed9ae8.png" width="600px">
</p>

# 📖 Peniel — Encontro com Deus
> **Web Data Visualization — Projeto Individual (1º Semestre SPTech)**

O **Peniel** é um espaço digital focado no desenvolvimento pessoal e bem-estar, desenhado para incentivar o hábito intencional de leitura, reflexão e escrita diária. A plataforma atua como um diário interativo guiado que afasta o usuário de estímulos de dopamina rápida das redes sociais.

Index: https://github.com/miguelrzc/ProjetoIndividual/issues/4



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