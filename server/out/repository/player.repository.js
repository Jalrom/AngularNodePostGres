"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const player_model_1 = require("./../models/player.model");
const inversify_1 = require("inversify");
const typeorm_1 = require("typeorm");
let PlayerRepository = class PlayerRepository {
    constructor() {
        this.connect().then((connection) => __awaiter(this, void 0, void 0, function* () {
            this.playerRepository = connection.getRepository(player_model_1.Player);
        })).catch(err => console.log(err));
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.playerRepository.find();
        });
    }
    create(player) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.playerRepository.save(player);
        });
    }
    update(player) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.playerRepository.save(player);
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.playerRepository.findOneById(id);
        });
    }
    findByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.playerRepository.findOne({ username: username });
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.playerRepository.findOne({ email: email });
        });
    }
    connect() {
        return typeorm_1.createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "postgres",
            database: "rpg",
            entities: [
                player_model_1.Player
            ],
            synchronize: true,
            logging: false
        });
    }
};
PlayerRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], PlayerRepository);
exports.PlayerRepository = PlayerRepository;
//# sourceMappingURL=player.repository.js.map