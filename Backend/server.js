const fs = require("fs");
const path = require("path");
const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

app.use(express.json());

// ✅ MySQL Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Change if necessary
    password: "root", // Change if necessary
    database: "evaluation_db"
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error("❌ Database connection failed:", err.message);
    } else {
        console.log("✅ Connected to MySQL Database");

        // Create `times` table if it doesn't exist
        db.query(`
            CREATE TABLE IF NOT EXISTS times (
                id INT AUTO_INCREMENT PRIMARY KEY,
                time DATETIME NOT NULL
            )
        `, (err) => {
            if (err) console.error("❌ Error creating table:", err.message);
        });
    }
});

// ✅ POST `/time` - Insert current time into the database
app.post("/time", async (req, res) => {
    const now = new Date();
    now.setSeconds(0, 0); // Remove seconds & milliseconds

    db.query("INSERT INTO times (time) VALUES (?)", [now], (err, result) => {
        if (err) {
            console.error("❌ Error inserting time:", err.message);
            return res.status(500).send("Database error");
        }
        console.log("✅ Time inserted:", now);
        res.json({ success: true, time: now });
    });
});

// ✅ GET `/times` - Retrieve all stored times
app.get("/times", (req, res) => {
    db.query("SELECT * FROM times", (err, results) => {
        if (err) {
            console.error("❌ Error fetching times:", err.message);
            return res.status(500).send("Database error");
        }
        res.json(results);
    });
});

// ✅ Logs Middleware
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

// ✅ GET `/logs` - Retrieve server logs
app.get("/logs", (req, res) => {
    if (fs.existsSync(logFile)) {
        const logs = fs.readFileSync(logFile, "utf8");
        res.type("text/plain").send(logs);
    } else {
        res.status(404).send("No logs available.");
    }
});

// ✅ GET `/` - Root endpoint
app.get("/", (req, res) => {
    res.send("Node.js server is running...");
});

// ✅ Start Server
app.listen(port, () => {
    console.log(`✅ Server started at http://localhost:${port}`);
});
