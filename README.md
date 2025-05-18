# 🗂️ Task Manager Web App (Azure + CI/CD)

![Azure Static Web Apps](https://img.shields.io/badge/Azure-Static%20Web%20App-blue?logo=microsoftazure)
![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub%20Actions-green?logo=githubactions)
![Cosmos DB](https://img.shields.io/badge/Database-Cosmos%20DB-blueviolet?logo=azurecosmosdb)

> A full-stack Task Manager built using React, Azure Functions, and Azure Cosmos DB — deployed with CI/CD pipelines via GitHub Actions on Azure Static Web Apps.

---

## 🌐 Live Demo

[👉 Try the App](https://delightful-pond-0b6e68b1e.6.azurestaticapps.net)

---

## 🔧 Features

- ✅ Create, update, complete, and delete tasks
- ✅ Serverless backend with Azure Functions
- ✅ Persistent storage using Azure Cosmos DB (NoSQL)
- ✅ Responsive React-based frontend
- ✅ Automated deployment through GitHub Actions
- ✅ Hosted free on Azure Static Web Apps

---

## 🧠 Architecture

```mermaid
graph TD
  A[React Frontend] --> B[Azure Static Web Apps]
  B --> C[Azure Functions API]
  C --> D[Azure Cosmos DB]

