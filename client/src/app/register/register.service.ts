import { User } from './../user.interface';
import { UserGlobal } from 'app/user.global';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterService {

    constructor(private http: Http) {}

    public register(player: UserGlobal): Observable<number> {
        const body: User = {
            username: player.username,
            name: player.name,
            email: player.email,
            password: player.password,
        };

        return this.http.post('/api/register', body).map(
            res => res.json()
        );
    }
}
