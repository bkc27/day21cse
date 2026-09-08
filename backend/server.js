const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);
app.get("/", (req, res) => {
    res.send("Task API is running");
});

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("MONGODB CONNECTED");
    })
    .catch((error) => {
        console.log("Unable to Connect DB", error);
    });

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log("Server Started");
});