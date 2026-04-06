
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/transactions", require("./routes/transactionRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));
// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));