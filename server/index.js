//la primera linea tiene que ser el require del config para el server
require('./config')
const express = require('express');

//variables entorno sistema operativo

//console.log(process.env.PORT);

const PORT = process.env.PORT || 3000;
const server = express();



server.use(express.json());


// server.use(require('./routes'));

server.listen(PORT,()=>{
    console.log(`Server listening at http://localhost:${PORT}/`)
})
