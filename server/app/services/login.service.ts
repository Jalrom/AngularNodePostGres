import { inject } from 'inversify';
import { UserRepository } from './../repository/user.repository';
import {injectable} from 'inversify';
import 'reflect-metadata';
import TYPES from "../types";

@injectable()
export class LoginService {
    @inject(TYPES.UserRepository)
    private userRepository: UserRepository;

    public async login(user: any): Promise<any> {
        const res = await this.userRepository.findByUsername(user.username);
        
        if ( res !== undefined) {
            if (res.password !== user.password) {
                throw new Error('You entered the wrong password.');
                
            } else {                
                return res;
            }
        } else {
            throw new Error('Username ' + user.username + ' does not exist.');
        }
    }
}