const router = require('express').Router();
const Travel = require('../models/Travel');
const multer = require('../config/multer')


router.get('/', (req, res) => {
    // Travel.find(function (error, travels) {
    //     if (!error) {
    //         res.send(travels);
    //     }

    // });
    Travel.find({}).then(travels=>{
        res.status(200).send(travels)
    }).catch(err=>res.status(400).send(err.message));

});

router.post('/', (req, res) => {
    new Travel(req.body).save().then(travel => {
        res.send(travel);
    }).catch(err => {
        res.status(400).send(err);
    });
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params

        await Travel.updateOne({ _id: id }, req.body)

        return res.send({ message: 'cambio exitoso' })
    } catch (err) {
        return res.status(400).send('El id no es valido')
    }

});

router.delete('/:id', async (req, res) => {
    try {

        const { id } = req.params;

        await Travel.remove({ _id: id });

        return res.send({ message: 'eliminado satisfactoriamente' })

    } catch (err) {
        return res.status(400).send('El id no es valido')
    }
});

router.post('/upload/:id', multer.single('file'), (req, res) => {

    const viajeId = req.params.id;
    
    
    var fileName = 'Imagen no subida';
    console.log(req.file.originalname)
    if (req.file) {
        // var filePath = req.file.image.path;
        // var fileSplit = filePath.split('\\');
        // var fileName = fileSplit[1];

        Travel.findByIdAndUpdate(viajeId, { imagen: req.file.originalname }, { new: true }, (err, viajeUpdated) => {
            if (err) return res.status(500).send(err.message)//{ message: 'La imagen no se ha subido' });

            if (!viajeUpdated) return res.status(404).send({ message: 'No se ha encontrado viaje para cargar la imagen' });

            return res.status(200).send({ viaje: viajeUpdated })
        });


    } else {
        return res.status(400).send("No se han enviado archivos")
    }
})

router.get("/imagenes", (req, res) => {
    res.sendFile(process.env.TRAVELS.IMG_URL+"/cabra.jpg")
})

module.exports = router;