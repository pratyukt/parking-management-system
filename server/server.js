const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

// Database connection
connectDb();
const app = express();
const port = process.env.PORT || 5000;
// Middleware setup
app.use(cors());
app.use(express.json());
// Basic Routes
app.get("/", (req, res) => {
    res.send("Server is working");
});

const signuproutes = require("./routes/SignUpRoutes");
app.use("/", signuproutes);

const parkingspace = require("./routes/ParkingspaceRoutes");
app.use("/parking" , parkingspace);
// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});