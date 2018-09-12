"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Skill {
    constructor(name, level, experience, player, id) {
        this._name = name;
        this._level = level;
        this._experience = experience;
        this._id = id;
        this._player = player;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get experience() {
        return this._experience;
    }
    get player() {
        return this._player;
    }
    set id(value) {
        this._id = value;
    }
    set name(value) {
        this._name = value;
    }
    set level(value) {
        this._level = value;
    }
    set experience(value) {
        this._experience = value;
    }
    set player(value) {
        this.player = value;
    }
}
exports.Skill = Skill;
//# sourceMappingURL=skill.js.map