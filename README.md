# Task Manager - Frontend

## Project Overview

This project is the frontend application of the Task Manager built with React. It provides a user-friendly interface to create, update, and manage tasks effectively. The frontend communicates with backend APIs hosted on Azure Functions and stores data in Cosmos DB.

The app is designed to be performant, scalable, and easily maintainable, using modern React features and best practices.

## Tech Stack

| Technology                       | Purpose            |
| -------------------------------- | ------------------ |
| React                            | Frontend framework |
| Azure Static Web Apps            | Hosting frontend   |
| Azure Functions                  | Backend APIs       |
| Azure Cosmos DB                  | NoSQL Database     |
| GitHub Actions / Azure Pipelines | CI/CD automation   |

## Architecture Diagram

```mermaid
graph TD
  subgraph User
    UI["User Interface (React)"]
  end

  subgraph AzureStaticWebApps
    StaticApp["Azure Static Web Apps"]
  end

  subgraph AzureFunctions
    API["Azure Functions (API Layer)"]
    Auth["Azure AD B2C (Authentication)"]
  end

  subgraph Database
    CosmosDB["Azure Cosmos DB (NoSQL Database)"]
  end

  subgraph CI_CD
    GitHub["GitHub Repository"]
    Pipeline["GitHub Actions / Azure Pipelines"]
  end

  %% User interaction flow
  UI --> StaticApp
  StaticApp --> API
  API --> CosmosDB
  UI --> Auth
  API --> Auth

  %% Deployment flow
  GitHub --> Pipeline
  Pipeline --> StaticApp
  Pipeline --> API

  %% Styling arrows
  style UI fill:#f9f,stroke:#333,stroke-width:2px
  style StaticApp fill:#bbf,stroke:#333,stroke-width:2px
  style API fill:#fbf,stroke:#333,stroke-width:2px
  style CosmosDB fill:#bfb,stroke:#333,stroke-width:2px
  style Auth fill:#ffb,stroke:#333,stroke-width:2px
  style GitHub fill:#ccc,stroke:#333,stroke-width:2px
  style Pipeline fill:#fcc,stroke:#333,stroke-width:2px



