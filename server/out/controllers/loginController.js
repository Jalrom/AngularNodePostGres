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
const loginService_1 = require("../services/loginService");
const inversify_2 = require("inversify");
const types_1 = require("../types");
let LoginController = class LoginController {
    constructor() {
        this.route = '/api/login';
    }
    register(app) {
        app.route(this.route)
            .post((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const login = {
                username: req.body.username,
                password: req.body.password
            };
            yield this.loginService.login(login).then(resp => res.json(true)).catch(err => next(err));
        }));
    }
};
__decorate([
    inversify_1.inject(types_1.default.LoginService),
    __metadata("design:type", typeof (_a = typeof loginService_1.LoginService !== "undefined" && loginService_1.LoginService) === "function" && _a || Object)
], LoginController.prototype, "loginService", void 0);
LoginController = __decorate([
    inversify_2.injectable(),
    __metadata("design:paramtypes", [])
], LoginController);
exports.LoginController = LoginController;
var _a;
//# sourceMappingURL=loginController.js.map