//configuracion de las variables de entorno para configurar el servidor
console.log('NODE_ENV = ', process.env.NODE_ENV);
//Evitar errores de escritura
const environments = {
    "development": "development",
    "production": "production"

}

//Entorno por defecto
const ENV = process.env.NODE_ENV || environments.development;

// Escribimos un objeto de congig para cada entorno 
const config = {
    [environments.production]: {
        PORT: 80
    },
    [environments.development]: {
        PORT: 8080
    },

}

const CONFIG = config[ENV];
if(!CONFIG) throw new Error(`Invalid NODE_ENV=${ENV}`);
//desestructuro para poder guardar el objeto
process.env = {
    ...process.env,
    ...CONFIG
};