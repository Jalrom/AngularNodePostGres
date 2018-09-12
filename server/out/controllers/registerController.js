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
const inversify_2 = require("inversify");
const types_1 = require("../types");
const player_1 = require("../models/player");
const register_service_1 = require("../services/register.service");
let RegisterController = class RegisterController {
    constructor() {
        this.route = '/api/register';
    }
    register(app) {
        app.route(this.route)
            .post((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const newPlayer = new player_1.Player();
            newPlayer.username = req.body.username;
            newPlayer.name = req.body.name;
            newPlayer.email = req.body.email;
            newPlayer.password = req.body.password;
            yield this.registerService.createUser(newPlayer)
                .then(user => {
                newPlayer.id = user.id;
                res.json(newPlayer.id);
            })
                .catch(err => next(err));
        }));
    }
};
__decorate([
    inversify_1.inject(types_1.default.RegisterService),
    __metadata("design:type", register_service_1.RegisterService)
], RegisterController.prototype, "registerService", void 0);
RegisterController = __decorate([
    inversify_2.injectable(),
    __metadata("design:paramtypes", [])
], RegisterController);
exports.RegisterController = RegisterController;
//# sourceMappingURL=registerController.js.map