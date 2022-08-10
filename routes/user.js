const {Router} = require('express');
const { check } = require('express-validator');
const {userGet, postUser, putUser, patchUser, deleteUser } = require('../controllers/user');


const router = Router();

router.get('/', userGet)

router.put('/:id', putUser)

router.post('/',[
    check('email', 'Email no es válido').isEmail(),
],postUser)

router.patch('/', patchUser)

router.delete('/', deleteUser)



module.exports = router;