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
finance-backend/ │ ├── controllers/ # Handles business logic │ ├── userController.js │ ├── transactionController.js │ └── dashboardController.js │ ├── models/ # Database schemas │ ├── User.js │ └── Transaction.js │ ├── routes/ # API endpoints │ ├── userRoutes.js │ ├── transactionRoutes.js │ └── dashboardRoutes.js │ ├── middleware/ # Authentication & authorization │ ├── authMiddleware.js │ └── roleMiddleware.js │ ├── config/ # Database connection │ └── db.js │ ├── .env # Environment variables ├── server.js # Entry point └── package.json # Dependencies  ```

