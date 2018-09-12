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
const player_repository_1 = require("./../repository/player.repository");
const inversify_1 = require("inversify");
const inversify_2 = require("inversify");
const types_1 = require("../types");
const skills_service_1 = require("../services/skills.service");
const skill_1 = require("../models/skill");
let SkillsController = class SkillsController {
    constructor() {
        this.route = '/api/skills';
    }
    register(app) {
        app.route(this.route + '/:playerId')
            .get((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const skills = yield this.skillsService.getSkillsOfPlayer(req.params.playerId).catch(err => next(err));
            res.json(skills);
        }));
        app.route(this.route)
            .post((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const skill = new skill_1.Skill(req.body.name, req.body.level, req.body.experience, req.body.player);
            console.log(req.body);
            skill.player = yield this.playerRepository.find(req.body.playerId);
            skill.name = 'Mining';
            skill.level = 1;
            skill.experience = 0;
            yield this.skillsService.createSkill(skill).then(skills => res.json(skills)).catch(err => next(err));
        }))
            .put((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const skill = {
                level: req.body.level,
                experience: req.body.experience,
                id: req.body.id
            };
            const updatedSkill = yield this.skillsService.updateSkill(skill).catch(err => next(err));
            res.json(updatedSkill);
        }));
    }
};
__decorate([
    inversify_1.inject(types_1.default.SkillsService),
    __metadata("design:type", skills_service_1.SkillsService)
], SkillsController.prototype, "skillsService", void 0);
__decorate([
    inversify_1.inject(types_1.default.PlayerRepository),
    __metadata("design:type", player_repository_1.PlayerRepository)
], SkillsController.prototype, "playerRepository", void 0);
SkillsController = __decorate([
    inversify_2.injectable(),
    __metadata("design:paramtypes", [])
], SkillsController);
exports.SkillsController = SkillsController;
//# sourceMappingURL=skills.controller.js.map