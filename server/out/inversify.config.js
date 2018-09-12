"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { ResourceHub } from './hubs/resource.hub';
const inversify_1 = require("inversify");
const server_1 = require("./server");
const app_1 = require("./app");
const types_1 = require("./types");
const register_service_1 = require("./services/register.service");
const login_service_1 = require("./services/login.service");
const user_repository_1 = require("./repository/user.repository");
const login_controller_1 = require("./controllers/login.controller");
const register_controller_1 = require("./controllers/register.controller");
const container = new inversify_1.Container();
exports.container = container;
container.bind(types_1.default.Server).to(server_1.Server);
container.bind(types_1.default.Application).to(app_1.Application);
// Controllers
container.bind(types_1.default.Controller).to(login_controller_1.LoginController);
container.bind(types_1.default.Controller).to(register_controller_1.RegisterController);
// Services
container.bind(types_1.default.LoginService).to(login_service_1.LoginService);
container.bind(types_1.default.RegisterService).to(register_service_1.RegisterService);
// Repositories
container.bind(types_1.default.UserRepository).to(user_repository_1.UserRepository);
//# sourceMappingURL=inversify.config.js.map