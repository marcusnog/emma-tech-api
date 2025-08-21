import { User } from "../../../domain/entities/User";
import { UserRepository} from "../../../domain/repositories/UserRepository";
import { UserModel } from "../models/UserModel";

export class UserRepositoryMongo implements UserRepository {
    async findAll(): Promise<User[]> {
        const users = await UserModel.find();
        return users.map(u => new User(u.id, u.nome, u.email));
    }

    async create(user: User): Promise<User>{
        const newUser = new UserModel(user);
        const saved = await newUser.save();

        return new User(saved.id, saved.nome, saved.email);
    }
}