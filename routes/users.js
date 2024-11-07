const userController = require("../controllers/userController");
var express = require("express");
const authenticateToken = require("../middleware/authenticateToken");
const user = require("../models/user");
var router = express.Router();

/**
 * @swagger
 * tags:
 *  name: API da Geração Tech
<<<<<<< HEAD
 *  description: Documentação de refência da API GT SUL
=======
 *  description: Documentação de refência da API dos bunito da GT SUL
>>>>>>> 83fc9f6ac2240bdf660e5491eca99a5cc8202431
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
router.get("/", userController.getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *    get:
 *      summary: Retorna um usuário com endereços cadastrados
 *      tags: [Usuários]
 *      security:
 *         - bearerToken: [] # Esta rota é protegida por JWT
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: ID do usuário
 *            schema:
 *              type: string
 *      responses:
 *          200:
 *            description: Dados do usuário com endereços
 *          401:
 *            description: Token inválido ou ausente
 *          404:
 *            description: Usuário não encontrado
 */
<<<<<<< HEAD

router.get("/:id", authenticateToken, userController.getUserWithAddress);
router.post("/", userController.createUser);
router.post("/login", userController.loginUser);

router.delete("/:id", userController.deleteUser);
=======
router.get("/:id", authenticateToken, userController.getUserWithAddress);

router.post("/", userController.createUser);
router.post("/login", userController.loginUser);

router.put('/:id', userController.deleteUser);
>>>>>>> 83fc9f6ac2240bdf660e5491eca99a5cc8202431

module.exports = router;
