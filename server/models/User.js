
const mongoose = require('mongoose');
const _ = require('lodash');
const bcrypt = require('bcrypt');
//esquema de datos
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
        maxlength: 50,
        trim: true /*quita los espacios que al principio o al final */
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 128
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 100,
        trim: true
    }
}, {
        strict: true
    });
//individualmente cada usuario va a tener sus documentos
UserSchema.methods.toJSON = function () {
    /*aqui el this se refiere al propio usuario*/
    const user = this;
    return _.pick(user, ['_id', 'username', 'id']);

}

UserSchema.pre('save', function (next) {
    const user = this;
    if (user.isModified('password')) {
             bcrypt.hash(user.password, 10).then(hash => {
                    user.password = hash;
                    //quiero que avance solo cuando haya terminado todas las funciones asincronas
                    next();
            })

    }else {
        //continua con el guardado
        next();
    }

});

// el esquema de datos que se guarde en user
const User = mongoose.model('user', UserSchema);

module.exports = User;