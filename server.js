const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 10000; // Cambia la porta di default a 10000

app.use(cors());

// Assicurati di avere la variabile d'ambiente configurata su Render.com
const apiKey = process.env.OPENAI_API_KEY;
console.log('API Key:', apiKey); // Aggiungi questo log

app.get('/api-key', (req, res) => {
    console.log('Request received for /api-key');
    res.json({ apiKey });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});