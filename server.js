const express = require('express');
const cors = require('cors');
const app = express();

// 1. Pełny CORS (akceptuje wszystko)
app.use(cors());
// 2. Obsługa każdego formatu danych
app.use(express.json());
app.use(express.text({ type: '*/*' }));
app.use(express.urlencoded({ extended: true }));

app.get('/healthz', (req, res) => res.sendStatus(200));

// 3. Główny odbiornik
app.post('/incoming', (req, res) => {
    console.log(`\n\x1b[41m[ !!! ALERT: NOWY ŁUP !!! ]\x1b[0m`);
    console.log(`GODZINA: ${new Date().toLocaleTimeString()}`);
    // Wyświetla body niezależnie od formatu
    console.log(`DANE:`, req.body); 
    res.status(200).send("OK");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`SYSTEM LIVE ON PORT ${PORT}`));
