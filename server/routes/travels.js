const router = require('express').Router();
const Travel = require('../models/Travel');

router.get('/', (req, res) => {
    Travel.find(function (error, travels) {
        if (!error) {
            res.send(travels);
        }

    });
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

        const { id } = req.params

        await Travel.remove({ _id: id });

        return res.send({ message: 'eliminado satisfactoriamente' })

    } catch (err) {
        return res.status(400).send('El id no es valido')
    }
});


module.exports = router;