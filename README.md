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
⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/<your-username>/finance-backend.git
cd finance-backend

2️⃣ Install Dependencies
npm install


3️⃣ Configure Environment Variables
Create .env file:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

4️⃣ Run the Server
npm run dev

Server will start at:
http://localhost:5000
---

📦 API Testing
Tested using Postman
Supports all CRUD operations and analytics routes

---
🔐 Access Control Logic
Middleware validates JWT token
Role middleware restricts access based on user role
{
  "message": "Access Denied"
}

---
🚀 Future Enhancements
📄 Pagination & Sorting
🔎 Search Functionality
📊 Frontend Dashboard (React)
📘 API Documentation (Swagger)
☁️ Deployment (Render / Railway)
📈 Graph Visualization (Chart.js / Recharts)

---
👨‍💻 Author
Viraj Pawar
---

📌 Why This Project Matters
This project demonstrates:

✅ Real-world backend architecture
✅ Secure API development
✅ Role-based authorization
✅ MongoDB aggregation expertise
✅ Clean and scalable code practices
---
