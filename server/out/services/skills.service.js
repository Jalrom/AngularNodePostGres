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
const skill_1 = require("./../models/skill");
const inversify_1 = require("inversify");
const types_1 = require("../types");
require("reflect-metadata");
const skills_repository_1 = require("../repository/skills.repository");
let SkillsService = class SkillsService {
    getSkillsOfPlayer(playerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const skillsDTO = yield this.skillRepository.findByPlayer(playerId);
            const skills = [];
            for (let i = 0; i < skillsDTO.length; i++) {
                skills.push(this.toSkill(skillsDTO[i]));
            }
            return skills;
        });
    }
    createSkill(skill) {
        return __awaiter(this, void 0, void 0, function* () {
            const skillDTO = this.toSkillDTO(skill);
            yield this.skillRepository.create(skillDTO);
        });
    }
    updateSkill(skill) {
        return __awaiter(this, void 0, void 0, function* () {
            // const skillDTO = this.toSkillDTO(skill);
            yield this.skillRepository.update(skill);
        });
    }
    toSkillDTO(skill) {
        return {
            name: skill.name,
            experience: skill.experience,
            level: skill.level,
            player: skill.player,
            id: skill.id
        };
    }
    toSkill(skillDTO) {
        return new skill_1.Skill(skillDTO.name, skillDTO.level, skillDTO.experience, skillDTO.player, skillDTO.id);
    }
};
__decorate([
    inversify_1.inject(types_1.default.SkillsRepository),
    __metadata("design:type", skills_repository_1.SkillsRepository)
], SkillsService.prototype, "skillRepository", void 0);
SkillsService = __decorate([
    inversify_1.injectable()
], SkillsService);
exports.SkillsService = SkillsService;
//# sourceMappingURL=skills.service.js.map