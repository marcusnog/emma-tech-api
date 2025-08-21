import { Router } from "express";
import { UserController } from "../../../application/Controllers/UserController";

const router = Router();

router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);

export default router;