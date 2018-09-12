// import { ResourceHub } from './hubs/resource.hub';
import { Container } from "inversify";
import { Server } from "./server";
import { Application } from "./app";
import TYPES from "./types"

import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';

import { UserRepository } from './repository/user.repository';

import { RegistrableController } from "./controllers/registerable.controller";
import { LoginController } from "./controllers/login.controller";
import { RegisterController } from "./controllers/register.controller";

const container: Container = new Container();

container.bind(TYPES.Server).to(Server);
container.bind(TYPES.Application).to(Application);

// Controllers
container.bind<RegistrableController>(TYPES.Controller).to(LoginController);
container.bind<RegistrableController>(TYPES.Controller).to(RegisterController);

// Services
container.bind<LoginService>(TYPES.LoginService).to(LoginService);
container.bind<RegisterService>(TYPES.RegisterService).to(RegisterService);

// Repositories
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository);

export { container };
