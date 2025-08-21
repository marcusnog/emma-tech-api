import {User} from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export class CreateUserUseCase {
    constructor( private userRepository: UserRepository) {}

    async execute(userData: Omit<User, "id">): Promise<User> {
        const user = new User(Date.now().toString(), userData.nome, userData.email);
        return this.userRepository.create(user);
    }
}