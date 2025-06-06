# OrderRX – Prescription Ordering Web App

OrderRX is a full-stack web application built for a pharmacy to manage recurring prescription orders. It replaces an outdated Excel-based workflow with a structured, web-based dashboard that improves visibility, reduces errors, and enhances staff efficiency.
---

## 🧠 Problem Solved

Pharmacy staff were using spreadsheets to track which patients were due for prescription reorders each week — a process prone to human error, poor visibility, and inefficiencies. OrderRX digitized this workflow into a centralized, easy-to-use dashboard.

---

## ✨ Features

- Dashboard overview showing patients due for orders by week
- Full CRUD operations for managing patients and medications
- Real-time visibility into upcoming prescription orders
- Responsive and clean UI for in-pharmacy usage
- Email requests to Gps

---

## 🛠 Tech Stack

- **Frontend**: React, ShadCN UI, Vite
- **Backend**: ASP.NET Core (REST API)
- **Database**: SQL Server
- **Authentication**: JWT (JSON Web Tokens)
- **Dev Tools**: Git, Swagger,

---

## 🖼 Screenshots


---

## ⚙️ Getting Started

> To run this project locally, you'll need the backend and frontend set up separately.

### 1. Clone the Repo

```bash
git clone https://github.com/makbar2/orderrx.git
cd orderrx


### 2. Configure appsettings.json

```{
  "AppSettings":{
    "Token" : < Your token> // this needs to be like 64 bytes long, i had an issue with this and i had to add  a bunch of stuff to it 
  },
  "EmailSettings":{
    "Sender" : <Your email address>,
    "Password" : <Your passowrd>

  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}```
