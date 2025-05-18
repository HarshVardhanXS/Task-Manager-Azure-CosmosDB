# 📋 Task Manager Web App (Azure + CI/CD)

A modern full-stack **Task Manager Web App** built using **React**, **Azure Functions**, **Cosmos DB**, and deployed via **Azure Static Web Apps** with automated **CI/CD using GitHub Actions**. This project showcases the complete DevOps lifecycle, from development to cloud deployment — all within the **Azure Free Tier**.

---

## 🌐 Live Demo

🔗 [Visit the Live App](https://delightful-pond-0b6e68b1e.6.azurestaticapps.net)

---

## 📌 Features

- ✅ User-friendly task management interface
- ✅ Create, update, delete, and mark tasks
- ✅ Real-time sync via Azure Functions and Cosmos DB
- ✅ Scalable serverless backend
- ✅ Fully automated GitHub Actions CI/CD pipeline
- ✅ Zero-cost Azure deployment

---

## ⚙️ Tech Stack

| Layer             | Technology                  |
|------------------|-----------------------------|
| Frontend         | React + TailwindCSS         |
| Backend API      | Azure Functions (Node.js)   |
| Database         | Azure Cosmos DB (NoSQL)     |
| CI/CD            | GitHub Actions              |
| Hosting          | Azure Static Web Apps       |
| Deployment Token | Managed via GitHub Secrets  |

---

## 🏗️ Architecture Overview

```plaintext
        ┌────────────┐        HTTP        ┌──────────────┐        NoSQL API       ┌──────────────┐
        │   Browser  ├───────────────────▶│ Azure Static │──────────────────────▶│ Azure Cosmos │
        │  (React UI)│   + GitHub Pages  │  Web Apps    │  Triggers via API     │     DB       │
        └────────────┘                   └──────┬───────┘                       └──────────────┘
                                                │
                                                ▼
                                      ┌─────────────────────┐
                                      │ Azure Functions API │
                                      │  (CRUD operations)  │
                                      └─────────────────────┘

🛠️ Project Structure

task-manager/
├── frontend/             # React frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
├── api/                  # Azure Functions (Node.js)
│   ├── createTask/
│   ├── getTasks/
│   ├── updateTask/
│   ├── deleteTask/
│   └── ...
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml
├── README.md
└── ...
