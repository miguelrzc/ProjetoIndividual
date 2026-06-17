<p align="center">
  <img src="https://user-images.githubusercontent.com/46379117/192358781-9ca879e4-e55e-4d0d-b876-f9a4a2ed9ae8.png" width="600px">
</p>

# 📖 Peniel — Encontro com Deus

> **Web Data Visualization — Projeto Individual (1º Semestre SPTech)**

O **Peniel** é um projeto individual focado em Devocional e na Leitura da Bíblia, criada para ajudar nas anotações ao estudar, e ter métricas sobre o progresso da leitura. O sistema funciona como um diário que transforma sentimentos e reflexões em dados analíticos, permitindo ao usuário acompanhar sua jornada de autoconhecimento.

---

## 🛠️ Tecnologias e Arquitetura

O projeto foi construído sobre o padrão de arquitetura **MVC (Model-View-Controller)**, garantindo a separação de responsabilidades e facilitando a manutenibilidade e escalabilidade do código.

| Categoria | Tecnologias |

| **Front-end** | HTML5, CSS3, JavaScript (ES6+) |
| **Back-end** | Node.js, Express Framework |
| **Banco de Dados** | MySQL Server (Hospedado em VM Ubuntu Linux) |
| **Data Viz** | Chart.js (API Web Data Visualization) |
| **Metodologia** | Scrum (Gestão Ágil) e Git (Versionamento) |

---

## 📸 Preview da Aplicação

Aqui estão os módulos funcionais da aplicação:

**INDEX (Home)**
<img width="1440" height="818" alt="Captura de Tela 2026-06-17 às 13 56 34" src="https://github.com/user-attachments/assets/14131dbc-6fab-440d-aa63-290dbb157103" />

**PENIEL (Interface Principal)**
<img width="1440" height="773" alt="Captura de Tela 2026-06-17 às 13 57 59" src="https://github.com/user-attachments/assets/46cd9894-acd8-4d1c-909c-886b8e5a228f" />

**LOGIN & CADASTRO**
<img width="1440" height="819" alt="Captura de Tela 2026-06-17 às 13 58 16" src="https://github.com/user-attachments/assets/d54cb8ca-f027-4a6f-95a2-5c1ce6dc4c21" />
<img width="1440" height="819" alt="Captura de Tela 2026-06-17 às 13 58 36" src="https://github.com/user-attachments/assets/7b8f6367-c9d3-4465-b7d5-4b795c21726c" />

**DEVOCIONAL & DASHBOARD ANALÍTICO**
<img width="1440" height="814" alt="Captura de Tela 2026-06-17 às 13 59 07" src="https://github.com/user-attachments/assets/aa8dc618-ac84-46ed-bbf7-a7bb7b4b7025" />
<img width="1440" height="820" alt="Captura de Tela 2026-06-17 às 13 59 39" src="https://github.com/user-attachments/assets/d54cb8ca-f027-4a6f-95a2-5c1ce6dc4c21" />

**HISTÓRICO**
<img width="1440" height="541" alt="Captura de Tela 2026-06-17 às 13 59 53" src="https://github.com/user-attachments/assets/2be335d0-7711-4adc-a28c-8d0a3cd7daab" />

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
   `git clone https://github.com/miguelrzc/ProjetoIndividual.git`

2. **Banco de Dados:**
   - Execute o script contido em `/src/database/script-tabelas.sql` no seu MySQL.

3. **Configuração de Ambiente:**
   - No arquivo `app.js`, defina `ambiente_processo` como `'desenvolvimento'`.
   - Crie um arquivo `.env` com suas credenciais de acesso ao banco de dados.

4. **Inicie o servidor:**
   ```bash
   npm install
   npm start
