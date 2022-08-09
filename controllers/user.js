const { response } = require('express');


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


const postUser = (req, res = response) => {

    res.json({
        message: 'Post - Controllers - User',
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