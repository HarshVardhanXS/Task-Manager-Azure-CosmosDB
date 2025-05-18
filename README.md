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
  A["User Interface (React)"] --> B["Azure Static Web Apps"]
  B --> C["Azure Functions (API)"]
  C --> D["Azure Cosmos DB"]


