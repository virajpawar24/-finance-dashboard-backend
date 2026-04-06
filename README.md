# 💰 Finance Dashboard Backend API

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express.js-Backend-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)

---

## 📌 Overview

This project is a backend system for managing financial records with role-based access control and dashboard analytics. It is designed to demonstrate backend architecture, API design, data handling, and access control mechanisms.

The system allows different users to interact with financial data based on their roles and provides aggregated insights for dashboard visualization.

---

## 🚀 Features

* 🔐 JWT-based Authentication
* 👥 Role-Based Access Control (Admin, Analyst, Viewer)
* 📊 Dashboard Analytics using MongoDB Aggregation
* 💰 Financial Transaction Management (CRUD)
* 🔍 Filtering (type, category)
* ⚡ Secure API endpoints
* ❌ Proper error handling and validation

---

## 🧠 User Roles

| Role    | Permissions                                |
| ------- | ------------------------------------------ |
| Admin   | Full access (create, read, update, delete) |
| Analyst | Read + Dashboard access                    |
| Viewer  | (Optional) Limited read-only               |

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JSON Web Tokens (JWT)

---

## 📂 Project Structure

```
finance-backend/
│
├── controllers/
│   ├── userController.js
│   ├── transactionController.js
│   └── dashboardController.js
│
├── models/
│   ├── User.js
│   └── Transaction.js
│
├── routes/
│   ├── userRoutes.js
│   ├── transactionRoutes.js
│   └── dashboardRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── .env
├── server.js
└── package.json
```

---

## 🔐 Authentication Flow

1. User logs in via `/api/users/login`
2. Server generates JWT token
3. Token is sent in headers:

```
Authorization: Bearer <token>
```

4. Middleware verifies token and extracts user info

---

## 📡 API Endpoints

### 👤 User Routes

| Method | Endpoint              | Description   |
| ------ | --------------------- | ------------- |
| POST   | `/api/users/register` | Register user |
| POST   | `/api/users/login`    | Login user    |

---

### 💰 Transaction Routes

| Method | Endpoint                | Access         | Description          |
| ------ | ----------------------- | -------------- | -------------------- |
| POST   | `/api/transactions`     | Admin          | Create transaction   |
| GET    | `/api/transactions`     | Admin, Analyst | Get all transactions |
| PUT    | `/api/transactions/:id` | Admin          | Update transaction   |
| DELETE | `/api/transactions/:id` | Admin          | Delete transaction   |

---

### 📊 Dashboard Routes

| Method | Endpoint                    | Access         | Description              |
| ------ | --------------------------- | -------------- | ------------------------ |
| GET    | `/api/dashboard/summary`    | Admin, Analyst | Income, expense, balance |
| GET    | `/api/dashboard/categories` | Admin, Analyst | Category-wise totals     |

---

## 📊 Example Response

### Dashboard Summary

```json
{
  "totalIncome": 0,
  "totalExpense": 500,
  "netBalance": -500
}
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd finance-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### 4. Run the server

```bash
npm run dev
```

---

## 📦 Postman Collection

All APIs are tested using Postman.
You can import the provided collection file to test endpoints easily.

---

## 🧠 Assumptions

* Roles are predefined (admin, analyst, viewer)
* JWT is used for authentication
* MongoDB is used for data persistence
* Each transaction is linked to a specific user

---

## 🔐 Access Control Logic

Middleware checks user role before allowing access.

Unauthorized users receive:

```json
{
  "message": "Access Denied"
}
```

---

## ⚠️ Error Handling

| Error Type    | Status Code |
| ------------- | ----------- |
| Invalid Input | 400         |
| Unauthorized  | 401         |
| Forbidden     | 403         |
| Server Error  | 500         |

---

## 🚀 Optional Enhancements (Future Scope)

* Pagination
* Search & advanced filtering
* Charts & frontend dashboard
* API documentation (Swagger)
* Deployment (Render / Railway)

---

## 👨‍💻 Author

**Viraj Pawar**

---

## 🌐 Live Demo

The backend is currently running locally.

All APIs can be tested using Postman by running the server on:
http://localhost:5000

## 📌 Summary

This project demonstrates:

* Backend architecture design
* API structuring and routing
* Role-based access control
* Aggregation logic using MongoDB
* Clean and maintainable code practices

🔥 This project focuses on backend engineering principles and real-world API design rather than just basic CRUD operations.
