const {Router} = require('express');
const { check } = require('express-validator');
const {userGet, postUser, putUser, patchUser, deleteUser } = require('../controllers/user');
const { validarCampos } = require('../middleware/validar-campos');
const Role = require('../models/role');


const router = Router();

router.get('/', userGet)

router.put('/:id', putUser)

router.post('/',[
    check('name', 'Name no es válido').not().isEmpty(),
    check('email', 'Email no es válido').isEmail(),
    check('password', 'Password no es válido').isLength({min: 8}),
    check('role').custom( async(role = '') => {
        const existRole = await Role.findOne({ role });
        if(!existRole){
            throw new Error(`El rol registrado: ${role}, no es válido en la base de datos`);
        }
    } ),
    //check('role', 'Role no es válido').isIn([ 'ADMIN_ROLE', 'USER_ROLE' ]),

    validarCampos,
],postUser)

router.patch('/', patchUser)

router.delete('/', deleteUser)



module.exports = router;