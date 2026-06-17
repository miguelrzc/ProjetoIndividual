<p align="center">
  <img src="https://user-images.githubusercontent.com/46379117/192358781-9ca879e4-e55e-4d0d-b876-f9a4a2ed9ae8.png" width="600px">
</p>

# 📖 Peniel — Encontro com Deus
> **Web Data Visualization — Projeto Individual (1º Semestre SPTech)**

O **Peniel** é um espaço digital focado no desenvolvimento pessoal e bem-estar, desenhado para incentivar o hábito intencional de leitura, reflexão e escrita diária. A plataforma atua como um diário interativo guiado que afasta o usuário de estímulos de dopamina rápida das redes sociais.

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
INDEX
<img width="1440" height="818" alt="Captura de Tela 2026-06-17 às 13 56 34" src="https://github.com/user-attachments/assets/14131dbc-6fab-440d-aa63-290dbb157103" />

PENIEL 
<img width="1440" height="773" alt="Captura de Tela 2026-06-17 às 13 57 59" src="https://github.com/user-attachments/assets/46cd9894-acd8-4d1c-909c-886b8e5a228f" />

LOGIN

<img width="1440" height="819" alt="Captura de Tela 2026-06-17 às 13 58 16" src="https://github.com/user-attachments/assets/a897cb8c-441c-498e-b81e-cad2e9275e6d" />

CADASTRO

<img width="1440" height="819" alt="Captura de Tela 2026-06-17 às 13 58 36" src="https://github.com/user-attachments/assets/7b8f6367-c9d3-4465-b7d5-4b795c21726c" />

DEVOCIONAL

<img width="1440" height="814" alt="Captura de Tela 2026-06-17 às 13 59 07" src="https://github.com/user-attachments/assets/aa8dc618-ac84-46ed-bbf7-a7bb7b4b7025" />

DASHBOARD

<img width="1440" height="820" alt="Captura de Tela 2026-06-17 às 13 59 39" src="https://github.com/user-attachments/assets/d54cb8ca-f027-4a6f-95a2-5c1ce6dc4c21" />


HISTORICO

<img width="1440" height="541" alt="Captura de Tela 2026-06-17 às 13 59 53" src="https://github.com/user-attachments/assets/2be335d0-7711-4adc-a28c-8d0a3cd7daab" />









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
