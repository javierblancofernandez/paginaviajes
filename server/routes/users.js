
const router = require('express').Router();
const User = require('../models/User');


router.get('/', (req, res) => {

    res.send('esta ruta mandaria la lista de usuarios');

});
router.post('/', (req, res) => {
    new User(req.body).save().then(user => {
        res.send(user);
    }).catch(err => {
        res.status(400).send(err = err.message || err.msg);
    });

});

// hacemos la ruta de logeado.
router.post('/auth', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = await User.findOne({
            email, password
        })

        if (!user) {
            return res.status(401).send({
                massage: 'Invalid credentials'
            });
        }
        res.send(user);

    } catch (err) {
        res.status(500).send(err)
    }


});


module.exports = router;