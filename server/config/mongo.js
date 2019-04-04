//Conexion para MONGODB configuración de la base de datos

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//protocolo host y nombre base de datos
mongoose.connect('mongodb://localhost:27017/web-viajes',{useNewUrlParser:true}).then(()=>{
    console.log(`Exito en la conexion de la base datos`)
});

module.exports=mongoose;