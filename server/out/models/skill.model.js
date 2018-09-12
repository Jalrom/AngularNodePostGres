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
Object.defineProperty(exports, "__esModule", { value: true });
const player_model_1 = require("./player.model");
const typeorm_1 = require("typeorm");
require("reflect-metadata");
let SkillSchema = class SkillSchema {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SkillSchema.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(type => player_model_1.Player),
    typeorm_1.JoinColumn(),
    __metadata("design:type", player_model_1.Player)
], SkillSchema.prototype, "player", void 0);
__decorate([
    typeorm_1.Column({ length: 16 }),
    __metadata("design:type", String)
], SkillSchema.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], SkillSchema.prototype, "level", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], SkillSchema.prototype, "experience", void 0);
SkillSchema = __decorate([
    typeorm_1.Entity("skill")
], SkillSchema);
exports.SkillSchema = SkillSchema;
//# sourceMappingURL=skill.model.js.map