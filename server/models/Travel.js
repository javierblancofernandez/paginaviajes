const mongoose = require('mongoose');

const TravelSchema = new mongoose.Schema({

    nombre:{
        type: String,
        required: true, 
        minlength: 2,
        maxlength: 100,
    },

    fecha: {
        type: Date,
        default: Date.now,
        required: true
    },

    descripcion: {
        type: String,
        minlength: 10,
        maxlength: 1000
    },

    imagen:{
        type: String,
        maxlength: 50
    },

    precio: {
        type: Number,
        default: 0
    },

    activado: {
        type: Boolean,
        default: true
    }

});
    


const Travel = mongoose.model('travel', TravelSchema);

module.exports = Travel; 