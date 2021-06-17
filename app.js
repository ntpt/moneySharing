const express = require("express");
const mongoose = require("mongoose");
var path = require("path");
var cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();

//load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Enable CORS
app.use(cors());

// Body parser
app.use(express.json());

// Routes
//app.use("/user", require("./routes/users.js"));
//app.use("/notification", require("./routes/notification.js"));
app.use("/friend", require("./routes/friend.js"));
//app.use("/group", require("./routes/group.js"));
//app.use("/bill", require("./routes/bill.js"));

const PORT = process.env.PORT ;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
