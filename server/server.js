const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();
connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const signuproutes = require("./routes/SignUpRoutes");
app.use("/" , signuproutes);

const parkingspace = require("./routes/ParkingspaceRoutes");
app.use("/parking" , parkingspace);

const walletRoutes = require("./routes/WalletRoutes");
app.use("/wallet", walletRoutes);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});