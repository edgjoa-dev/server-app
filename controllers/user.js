const { response } = require('express');
const bcryptjs = require('bcrypt');
const User = require('../models/user');


const userGet = (req, res = response) => {
    const {q, nombre = 'No name', apikey, page = 1, limit} = req.query;
    res.json({
        message: 'Get - Controllers - User',
        q, nombre, apikey, page, limit
    });
}

const putUser = (req, res = response) => {
    const { id } = req.params;

    res.status(400).json({
        message: 'Put - Controllers - User',
        id
    });
}


const postUser = async (req, res = response) => {

    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    //Verificar si email existe

    //Hashear password y guardarlo en la base de datos
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    //Guardar usuario en la base de datos
    await user.save();

    res.json({
        user
    });
}


const patchUser = (req, res = response) => {
    res.status(400).json({
        message: 'Patch - Controllers - User'
    });
}


const deleteUser = (req, res = response) => {
    res.status(400).json({
        message: 'Delete - Controllers - User'
    });
}



module.exports = {
    userGet,
    putUser,
    postUser,
    patchUser,
    deleteUser
}