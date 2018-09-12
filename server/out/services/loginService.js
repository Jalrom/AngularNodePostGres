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
const inversify_1 = require("inversify");
const playerRepository_1 = require("./../repository/playerRepository");
const inversify_2 = require("inversify");
require("reflect-metadata");
const types_1 = require("../types");
let LoginService = class LoginService {
    login(player) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.playerRepository.findByUsername(player.username);
            console.log(res);
            if (res !== undefined) {
                if (res.password !== player.password) {
                    throw new Error('You entered the wrong password.');
                }
                else {
                    return true;
                }
            }
            else {
                throw new Error('Username ' + player.username + ' does not exist.');
            }
        });
    }
};
__decorate([
    inversify_1.inject(types_1.default.UserRepository),
    __metadata("design:type", playerRepository_1.PlayerRepository)
], LoginService.prototype, "playerRepository", void 0);
LoginService = __decorate([
    inversify_2.injectable()
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=loginService.js.map