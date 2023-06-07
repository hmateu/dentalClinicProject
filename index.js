const express = require("express");
const app = express();

const PORT = 5000;

app.use(express.json());

app.listen(PORT, () => {
    console.log("Servidor levantado y a la escucha en el puerto ",PORT);
});