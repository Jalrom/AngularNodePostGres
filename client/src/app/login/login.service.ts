import { User } from './../user.interface';
import { ILogin } from './login.interface';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserGlobal } from '../user.global';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
    constructor(private http: Http) {}

    public login(user: UserGlobal): Observable<User> {
        const body: ILogin = {
            username: user.username,
            password: user.password,
        };

        return this.http.post('/api/login', body).map(res => res.json());
    }
}
