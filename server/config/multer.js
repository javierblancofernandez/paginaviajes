//sirve para subir archivos
const Multer =require('multer');

const storage = Multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"server/uploads/") //error , destino
    },
    filename:(req,file,callback)=> {
        callback(null,file.originalname)
    }
});
module.exports = Multer({storage});