const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.get('/pay', (req, res) => {
    res.json({
        message: 'Payment Complete!',
    });
});

app.listen(PORT, () => {
    console.log(`Express app is listening on http://localhost:${PORT}`);
});
