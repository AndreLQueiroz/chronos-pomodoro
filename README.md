<div align="center">

# ⏱️ Chronos
## Pomodoro Productivity Manager (TypeScript)

Uma aplicação web para **gestão de foco, tempo e produtividade**, baseada na técnica Pomodoro, com histórico detalhado, personalização de ciclos e uma experiência visual moderna.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Tech](https://img.shields.io/badge/stack-TypeScript%20%7C%20HTML%20%7C%20CSS-orange)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

---

## 📌 Sumário

- [Visão Geral](#-visão-geral)
- [Motivação do Projeto](#-motivação-do-projeto)
- [Problema Resolvido](#-problema-resolvido)
- [Solução Proposta](#-solução-proposta)
- [Principais Funcionalidades](#-principais-funcionalidades)
- [Arquitetura do Projeto](#-arquitetura-do-projeto)
- [Stack Tecnológica](#-stack-tecnológica)
- [Persistência de Dados](#-persistência-de-dados)
- [Estrutura do Projeto (TypeScript)](#-estrutura-do-projeto-typescript)
- [Instalação e Execução](#-instalação-e-execução)
- [Roadmap](#-roadmap)
- [Licença](#-licença)
- [Autor](#-autor)

---

## 🔍 Visão Geral

O **Chronos** é um gerenciador de produtividade que aplica a técnica Pomodoro para auxiliar usuários a manterem foco contínuo em tarefas de estudo ou trabalho.

A aplicação foi projetada para ser:
- Simples de usar
- Visualmente clara
- Personalizável
- Leve e rápida
- Executável diretamente no navegador

---

## 🎯 Motivação do Projeto

Muitas ferramentas de produtividade são complexas, poluídas visualmente ou exigem autenticação desnecessária.

O Chronos nasceu com a proposta de:
- Reduzir distrações
- Priorizar clareza visual
- Eliminar fricções de uso
- Oferecer controle total ao usuário

---

## ❗ Problema Resolvido

Usuários que desejam aplicar a técnica Pomodoro frequentemente enfrentam:
- Falta de controle de histórico
- Interfaces confusas
- Pouca personalização
- Dependência de contas/logins

---

## 💡 Solução Proposta

O Chronos resolve esses problemas oferecendo:
- Timer simples e direto
- Histórico persistente no navegador
- Configurações totalmente ajustáveis
- Navegação intuitiva entre páginas
- Interface moderna em tema escuro

---

## 🚀 Principais Funcionalidades

### ⏲️ Timer Pomodoro
- Contagem regressiva precisa
- Identificação visual do ciclo atual
- Indicação de progresso por ciclos
- Mensagens de orientação para foco

### 📋 Histórico de Sessões
- Registro automático de cada sessão
- Informações salvas:
  - Nome da tarefa
  - Duração
  - Data e horário
  - Status (concluída/interrompida)
  - Tipo (foco ou descanso)

### ⚙️ Configurações Avançadas
- Tempo de foco configurável
- Descanso curto personalizável
- Descanso longo ajustável
- Salvamento automático das preferências

### 🚧 Página 404 Customizada
- Mensagem amigável e contextual
- Links para páginas principais
- Comunicação clara com o usuário

---

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura **client-side**, com separação de responsabilidades e tipagem forte:

- **TypeScript**: regras de negócio, estado e tipagem
- **HTML**: estrutura semântica
- **CSS**: identidade visual e layout
- **LocalStorage**: persistência no navegador

---

## 🧰 Stack Tecnológica

| Tecnologia | Uso |
|-----------|-----|
| TypeScript | Lógica do timer, histórico e configurações |
| HTML5 | Estrutura da aplicação |
| CSS3 | Layout, tema dark e responsividade |
| Vite | Dev server e build |
| LocalStorage | Persistência de dados |

---

## 💾 Persistência de Dados

O Chronos utiliza **LocalStorage** para armazenar:
- Configurações do usuário
- Histórico de sessões

Nenhum dado é enviado para servidores externos.

---

## 📁 Estrutura do Projeto (TypeScript)

```bash
chronos/
├── public/
│   ├── index.html
│   ├── history.html
│   ├── settings.html
│   └── 404.html
├── src/
│   ├── styles/
│   │   └── styles.css
│   ├── pages/
│   │   ├── home.ts
│   │   ├── history.ts
│   │   ├── settings.ts
│   │   └── notFound.ts
│   ├── core/
│   │   ├── pomodoro.ts
│   │   ├── storage.ts
│   │   └── types.ts
│   └── main.ts
├── assets/
│   └── screens/
├── package.json
├── tsconfig.json
└── vite.config.ts
