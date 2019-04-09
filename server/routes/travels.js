const router = require('express').Router();
const Travel = require('../models/Travel');

router.get('/', (req, res) => {
    Travel.find(function(error, travels){
        if (!error) {
            res.send(travels);    
        }
        
    });
});

router.post('/', (req, res ) =>{
    new Travel(req.body).save().then(travel => {
        res.send(travel);
    }).catch(err =>{
        res.status(400).send(err);
    });
});

module.exports = router;