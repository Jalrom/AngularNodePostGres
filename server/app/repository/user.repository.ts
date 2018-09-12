import { User } from './../models/user.model';
import { injectable } from 'inversify';
import { Repository, Connection, createConnection } from "typeorm";

@injectable()
export class UserRepository {
    private playerRepository: Repository<User>;

    constructor() {
        this.connect().then(async connection => {
            this.playerRepository = connection.getRepository(User);
        }).catch(err => console.log(err));
    }

    public async findAll(): Promise<Array<User>> {
        return await this.playerRepository.find();
    }

    public async create(player: User): Promise<User> {        
        return await this.playerRepository.save(player);
    }

    public async update(player: User): Promise<User> {
        return await this.playerRepository.save(player);
    }

    public async find(id: string): Promise<User> {
        return await this.playerRepository.findOneById(id);
    }

    public async findByUsername(username: string): Promise<User> {
        return await this.playerRepository.findOne({username: username});
    }

    public async findByEmail(email: string): Promise<User> {
        return await this.playerRepository.findOne({email: email});
    }

    private connect(): Promise<Connection> {        
        return createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "postgres",
            database: "LIV4D",
            entities: [
                User
            ],
            synchronize: true,
            logging: false
        });
    }
}