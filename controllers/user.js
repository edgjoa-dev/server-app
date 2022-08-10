const { response } = require('express');
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


const postUser = async(req, res = response) => {

    const body = req.body;
    const user = new User(body);

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