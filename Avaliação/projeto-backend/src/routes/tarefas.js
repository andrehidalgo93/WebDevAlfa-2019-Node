const express = require('express');
const router = express.Router();

const { authenticationMiddleware } = require('../utils/token');
const controller = require('../controllers/tarefas');

/*******
 * TODO: Definição das rotas do CRUD de Tarefas.
 * Exemplo:
 * 
 * const validateBody = {
 *   // Schema de validação do Express Validator
 * };
 * 
 * 
 * router.post('/',
 *   authenticationMiddleware,
 *   controller.cadastro,
 * );
 *******/

// POST /tarefas
router.post('/',
    authenticationMiddleware,
    controller.cadastro,
);

// GET /tarefa/id
router.get('/:tarefaId',
    authenticationMiddleware,
    controller.buscaPorId,
);

// GET /tarefa 
router.get('/',
    authenticationMiddleware,
    controller.listagem,
);

// PUT /tarefa/id
router.put('/:tarefaId',
    authenticationMiddleware,
    controller.edicao,
);

// DELETE /tarefa/id
router.delete('/:tarefaId',
    authenticationMiddleware,
    controller.remocao,
);

// GET /tarefa/id/concluida
router.put('/:tarefaId/concluida',
    authenticationMiddleware,
    controller.marcarConcluida,
);

// GET /tarefa/id/concluida
router.delete('/:tarefaId/concluida',
    authenticationMiddleware,
    controller.desmarcarConcluida,
);

module.exports = router;
