const fs = require("fs");
const path = require("path");
const express = require("express");
const axios = require("axios");
const mysql = require("mysql2");
const cors = require("cors");
const http = require("node:http");
const {query} = require("express");

const app = express();
const port = 3000;

// CORS Configuration
const corsOptions = {
    origin: '*',
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type'
};
app.use(cors(corsOptions)); // ✅ Active CORS

app.use(express.json());

// MySQL Connection with Retry Logic
const db = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'evaluation_db'
});

const connectToDb = () => {
    db.connect(err => {
        if (err) {
            console.error("Database connection failed:", err.message);
            setTimeout(connectToDb, 5000);  // Retry every 5 seconds
        } else {
            console.log("Connected to MySQL Database");
        }
    });
};

connectToDb();

// POST /time - Insert the current time into the database
app.get("/time", async (req, res) => {
    const now = new Date();
    now.setSeconds(0, 0);

    db.query("INSERT INTO times (time) VALUES (?)", [now], (err, result) => {
        if (err) {
            console.error("Error inserting time:", err.message);
            return res.status(500).json({ error: "Database error", details: err.message });
        }
        console.log("Time inserted:", now);
        res.json({ success: true, time: now });
    });
});

// axios.post('http://localhost:3000/time'){
//     query(
//         "INSERT INTO times (time) VALUES (?)"
//     )
// }

// GET /times - Retrieve all times from the database
app.get("/times", (req, res) => {
    db.query("SELECT * FROM times", (err, results) => {
        if (err) {
            console.error("Error fetching times:", err.message);
            return res.status(500).json({ error: "Database error", details: err.message });
        }
        res.json(results);
    });
});

// Logging requests
const logDir = path.join(__dirname, "logs");
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}
const logFile = path.join(logDir, "server.log");

app.use((req, res, next) => {
    const logEntry = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
    fs.appendFileSync(logFile, logEntry);
    console.log(logEntry.trim());
    next();
});

// GET /logs - Read and return the log file
app.get("/logs", (req, res) => {
    if (fs.existsSync(logFile)) {
        const logs = fs.readFileSync(logFile, "utf8");
        res.type("text/plain").send(logs);
    } else {
        res.status(404).send("No logs available.");
    }
});

// GET / - Basic health check route
app.get("/", (req, res) => {
    res.send("Node.js server is running...");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});