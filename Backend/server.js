const express = require('express');
const mysql = require('mysql2');
const server = express();
const port = 3000;

// Middleware pour parser le JSON
server.use(express.json());

// Connexion à la base de données MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', // à mettre en variable
    database: 'test_db'
});

// Connexion à MySQL
db.connect(err => {
    if (err) {
        console.error('Erreur de connexion à MySQL:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

// Route pour récupérer tous les utilisateurs
server.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// Route pour ajouter un utilisateur
server.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400).json({ error: 'Veuillez fournir un nom et un email' });
        return;
    }
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ id: result.insertId, name, email });
    });
});

// Démarrer le serveur
server.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
