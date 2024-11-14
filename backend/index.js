const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todoRoutes");
const errorMiddleware = require("./middleware/errorMiddleware"); // Import đúng middleware
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4200;

const corsOptions = {
  origin: "http://localhost:4200",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());
// Routes
app.use("/todos", todoRoutes);

// Error middleware
app.use(errorMiddleware); // Sử dụng middleware xử lý lỗi

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
