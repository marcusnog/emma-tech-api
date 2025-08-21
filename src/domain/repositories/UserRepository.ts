import { User } from "../entities/User";


export interface UserRepository {
    findAll(): Promise<User[]>;

    create(user: User): Promise<User>;
}