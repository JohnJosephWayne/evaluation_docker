const fs = require("fs");
const path = require("path");
const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1354026102191951973/7AGR4sicxlmW75O6aVrttlT7GX-Br1Ibx3V94DqjTFS8GB7HPBoP9Z5Ge-K6Ob_eM0Zx";

/**
 * Envoie une notification sur Discord
 * @param {string} imageUrl - L'URL de l'image générée
 */
async function sendDiscordNotification(imageUrl) {
    try {
        const message = {
            content: `📢 Nouvelle image disponible ! 🔥\n${imageUrl}`,
        };

        await axios.post(DISCORD_WEBHOOK_URL, message);
        console.log("✅ Notification envoyée sur Discord !");
    } catch (error) {
        console.error("❌ Erreur lors de l'envoi du message Discord :", error.message);
    }
}

// Assure-toi que le dossier logs existe
const logDir = path.join(__dirname, "logs");
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

const logFile = path.join(logDir, "server.log");

// Middleware pour logger chaque requête HTTP
app.use((req, res, next) => {
    const logEntry = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
    fs.appendFileSync(logFile, logEntry); // Ajout des logs dans le fichier
    console.log(logEntry.trim()); // Affichage aussi dans la console
    next();
});

// ✅ Nouvel endpoint pour récupérer les logs
app.get("/logs", (req, res) => {
    if (fs.existsSync(logFile)) {
        const logs = fs.readFileSync(logFile, "utf8");
        res.type("text/plain").send(logs);
    } else {
        res.status(404).send("Aucun log disponible.");
    }
});

// Endpoint principal
app.get("/", (req, res) => {
    res.send("Serveur Node.js en cours d'exécution...");
});

app.listen(port, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${port}`);
});
