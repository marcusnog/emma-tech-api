import { Router } from "express";
import { UserController } from "../../../application/Controllers/UserController";

const router = Router();

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Retorna todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
router.get("/", UserController.getUsers);

/**
 * @openapi
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */
router.post("/", UserController.createUser);

export default router;
