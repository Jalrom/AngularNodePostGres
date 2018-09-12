import { Injectable } from '@angular/core';

@Injectable()
export class UserGlobal {

    // Properties
    private _id?: number;
    private _username: string;
    private _password: string;
    private _email: string;
    private _name: string;

    // Constructor
    public constructor() {
        this.username = '';
        this.password = '';
        this.email = '';
        this.name = '';
    }

    // Getters and Setters
    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }
    public get username(): string {
        return this._username;
    }

    public set username(value: string) {
        this._username = value;
    }

    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }
}
