const express = require("express");
const app = express();
const PORT = 5000;
const router = require('./router');
const db = require('./db');

app.use(express.json());

app.use(router);

db.then(
    ()=>{
        app.listen(PORT, () => {
            console.log(`Servidor levantado correctamente y a la escucha en el puerto ${PORT}`);
        });
    }
)
.catch(
    error => console.error(`Ha habido un error conectándose a la base de datos`, error)
)