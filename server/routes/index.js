//router hace una lista de direcciones que va 
const router = require ('express').Router();
const multer = require('../config/multer');

router.get('/',(req,res)=>{
    res.send(process.env.NODE_ENV);
});
//la ruta es la del formulario que esta en index.html de upload que la mando por post
// y ponemos un middleware de multer 

// middleware
 router.use('/users', require('./users'));
 router.use('/travels', require('./travels'));




module.exports = router;