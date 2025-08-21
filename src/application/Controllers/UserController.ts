import { Request, Response } from "express";
import { CreateUserUseCase } from "../../domain/useCases/UserUseCase";
import { UserRepositoryMongo } from "../../infra/db/repositories/UserRepositoryMongo";

export class UserController {
    static async getUsers( req: Request, res: Response){
        const repo = new UserRepositoryMongo();
        const users = await repo.findAll();
        res.json(users);
    }

    static async createUser(req: Request, res: Response){
        const repo = new UserRepositoryMongo();
        const useCase = new CreateUserUseCase(repo);
        const user = await useCase.execute(req.body);
        res.status(201).json(user);
    }
}