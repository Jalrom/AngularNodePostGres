const TYPES = {
        Server: Symbol('Server'),
        Application: Symbol('Application'),
        Routes: Symbol('Routes'),
        Index: Symbol('Index'),
        Controller: Symbol('Controller'),
        // Repositories
        UserRepository: Symbol('PlayerRepository'),
        // Services
        LoginService: Symbol('LoginService'),
        RegisterService: Symbol('RegisterService'),
};

export default TYPES;
