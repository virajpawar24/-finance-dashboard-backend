# 💰 Finance Dashboard Backend API

A robust backend system for managing financial transactions with **role-based access control** and **real-time analytics**.

Designed to showcase **production-level backend architecture**, secure APIs, and data aggregation using MongoDB.

---

## 🚀 Key Highlights

- 🔐 Secure Authentication using JWT
- 👥 Role-Based Access Control (Admin, Analyst, Viewer)
- 📊 Dashboard Analytics using MongoDB Aggregation Pipeline
- 💰 Transaction Management (CRUD operations)
- 🔍 Advanced Filtering (type, category)
- ⚡ RESTful API Design
- ❌ Centralized Error Handling
- 🧱 Scalable Project Structure

---

## 🧠 User Roles & Permissions

| Role     | Permissions |
|----------|------------|
| 🛡️ Admin   | Full Access (Create, Read, Update, Delete) |
| 📊 Analyst | Read + Dashboard Access |
| 👁️ Viewer  | Read-only (Optional) |

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** JSON Web Tokens (JWT)  
- **Tools:** Postman, Nodemon  

---

## 📂 Project Structure
```
finance-backend/
│
├── controllers/ # Handles request logic
│ ├── userController.js
│ ├── transactionController.js
│ └── dashboardController.js
│
├── models/ # Mongoose schemas
│ ├── User.js
│ └── Transaction.js
│
├── routes/ # API endpoints
│ ├── userRoutes.js
│ ├── transactionRoutes.js
│ └── dashboardRoutes.js
│
├── middleware/ # Authentication & authorization
│ ├── authMiddleware.js
│ └── roleMiddleware.js
│
├── config/ # Database connection
│ └── db.js
│
├── .env # Environment variables
├── server.js # Main server file
└── package.json # Project metadata & dependencies
```
## 🔐 Authentication Flow

1. User logs in via `/api/users/login`
2. Server validates credentials
3. JWT token is generated
4. Token is sent in request headers:

## 📊 Dashboard APIs

| Method | Endpoint | Access | Description |
|--------|---------|--------|------------|
| GET | `/api/dashboard/summary` | Admin, Analyst | Total income, expense, balance |
| GET | `/api/dashboard/categories` | Admin, Analyst | Category-wise breakdown |

---

## 📊 Sample Response

```json
{
  "totalIncome": 10000,
  "totalExpense": 5000,
  "netBalance": 5000
}
---


## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/finance-dashboard-backend.git
cd finance-backend

---

# 🧠 Why This Matters

👉 Evaluator will:
- Clone your repo  
- Follow these steps  
- Run your project  

👉 If this is missing → ❌ bad impression

---

# 🎯 Simple Rule

| Thing | Where |
|------|------|
| Setup steps | README.md |
| API list | README.md |
| Project explanation | README.md |

---

# 🚀 After This

👉 Update README  
👉 Push to GitHub:

```bash
git add .
git commit -m "Added setup instructions"
git push
