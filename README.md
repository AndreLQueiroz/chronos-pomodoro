<div align="center">

# ⏱️ Chronos
## Pomodoro Productivity Manager (React + TypeScript)

Uma aplicação web para **gestão de foco, tempo e produtividade**, baseada na técnica Pomodoro, com uma experiência visual moderna, componentes reutilizáveis e arquitetura organizada.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Tech](https://img.shields.io/badge/stack-React%20%7C%20TypeScript%20%7C%20Vite-orange)
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
- [Experiência do Usuário (UX/UI)](#-experiência-do-usuário-uxui)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Instalação e Execução](#-instalação-e-execução)
- [Roadmap](#-roadmap)
- [Licença](#-licença)
- [Autor](#-autor)

---

## 🔍 Visão Geral

O **Chronos** é um gerenciador de produtividade que aplica a técnica Pomodoro para ajudar usuários a manterem foco contínuo em tarefas de estudo ou trabalho.

A aplicação foi projetada para ser:
- Simples de usar
- Visualmente clara
- Personalizável
- Leve e rápida

---

## 🎯 Motivação do Projeto

Muitas ferramentas de produtividade são complexas, poluídas visualmente ou trazem fricções desnecessárias.

O Chronos nasceu com a proposta de:
- Reduzir distrações
- Priorizar clareza visual
- Oferecer controle total ao usuário
- Manter uma base de código organizada e escalável (componentes + TS)

---

## ❗ Problema Resolvido

Quem usa Pomodoro frequentemente enfrenta:
- Interfaces confusas
- Pouca personalização
- Falta de clareza do ciclo atual
- Dificuldade de manter um fluxo de foco consistente

---

## 💡 Solução Proposta

O Chronos resolve isso oferecendo:
- Timer direto e objetivo
- Componentes reutilizáveis (UI consistente)
- Identificação visual do ciclo
- Base em React + TypeScript para manutenção fácil

---

## 🚀 Principais Funcionalidades

### ⏲️ Timer Pomodoro
- Contagem regressiva
- Identificação visual do ciclo atual
- Indicação de ciclos (bolinhas/progresso)
- Ações de iniciar/pausar/resetar

### ⚙️ Interface modular
- Componentes isolados (Container, CountDown, Cycles, Inputs, Buttons, etc.)
- Reutilização de UI com consistência visual

> Se você já tiver histórico/config/localStorage implementado, dá pra adicionar uma seção aqui depois.

---

## 🏗️ Arquitetura do Projeto

O projeto é **SPA (Single Page Application)** com React, organizado por componentes:

- `App.tsx`: composição da interface principal
- `components/`: componentes de UI e partes do timer
- `styles/`: estilos globais/tema
- `main.tsx`: bootstrap do React

---

## 🧰 Stack Tecnológica

| Tecnologia | Uso |
|-----------|-----|
| React | Interface e componentes |
| TypeScript | Tipagem e segurança no código |
| Vite | Dev server e build |
| CSS | Tema e responsividade |

---

## 💾 Persistência de Dados

- (Opcional / em desenvolvimento) **LocalStorage** pode ser usado para salvar preferências e histórico localmente, sem servidor.

---

## 🎨 Experiência do Usuário (UX/UI)

- Tema escuro (reduz fadiga visual)
- Tipografia clara e hierarquia bem definida
- Componentes com layout centralizado e foco na tarefa
- Feedback visual em botões e estados do timer
