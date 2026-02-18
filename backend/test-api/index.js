const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola! API funcionando con Node nuevo');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});
