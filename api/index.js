const fs = require('fs');
const express = require('express');
const router = express.Router();
const path = require('path');
const commonmark = require('commonmark');

// @route /api
router.get('/', (req, res) => {
    return res.json({ message: 'hello' });
});

// @route /api/readme
//recoit la requete
router.get('/readme', (req, res) => {
    // lit le fichier README.md
    fs.readFile('README.md', 'utf-8', (err, data) => {
        // initialize la librairie pour la conversion
        const reader = new commonmark.Parser();
        const writer = new commonmark.HtmlRenderer();
        // Lire le fichier markdown
        const parsed = reader.parse(data);
        // convertir le markdown en html
        const result = writer.render(parsed);
        // envoyer le html
        res.send(result);
    });
});

module.exports = router;
