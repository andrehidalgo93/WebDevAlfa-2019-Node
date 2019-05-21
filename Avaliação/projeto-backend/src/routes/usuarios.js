const express = require('express');
const router = express.Router();
//TOKEN
const {
    authenticationMiddleware
} = require('../utils/token')

const controller = require('../controllers/usuarios');

/*******
 * TODO: Definição das rotas do CRUD de Usuários e Login.
 * Exemplo:
 * 
 * const validateBody = {
 *   // Schema de validação do Express Validator
 * };
 * 
 * 
 * router.post('/',
 *   controller.cadastro
 * );
 *******/

// POST - LOGIN 
router.post('/login',
    controller.login,
)

// POST
router.post('/',
    authenticationMiddleware,
    controller.cadastro,
);

// PUT
router.put('/:usuarioId',
    authenticationMiddleware,
    controller.edicao,
);

// GET
router.get('/:usuarioId',
    authenticationMiddleware,
    controller.buscaPorId,
);

module.exports = router;
