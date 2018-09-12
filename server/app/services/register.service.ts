import { inject, injectable } from 'inversify';
import { UserRepository } from './../repository/user.repository';
import 'reflect-metadata';
import { User } from "../models/user.model";
import TYPES from "../types";

@injectable()
export class RegisterService {
    @inject(TYPES.UserRepository)
    private playerRepository: UserRepository;

    public async createUser(player: User): Promise<User> {
        const username = await this.playerRepository.findByUsername(player.username);
        const email = await this.playerRepository.findByEmail(player.email);
        if (username !== undefined) {
            throw new Error('Username already taken.');
        }
        if (email !== undefined) {
            throw new Error('Email already in use.');
        }
        return await this.playerRepository.create(player);      
    }
}