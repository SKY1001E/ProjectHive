import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Consts} from "../other/consts";
import jwt_decode from 'jwt-decode';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUserByEmail(email: string): Observable<any> {
        return this.http.get(`${Consts.LOCAL_API_URL}api/User/${email}`)
    }

    getUserInfo(): any {
        const jwtToken = localStorage.getItem('token');
        const tokenInfo = this.getDecodedAccessToken(jwtToken!);

        return {
            email: tokenInfo.email,
            id: tokenInfo.nameid
        };
    }

    updateUser(user: User): Observable<any> {
        return this.http.put(`${Consts.LOCAL_API_URL}api/User/update/${user.id}`, user);
    }

    getDecodedAccessToken(token: string): any {
        try {
            return jwt_decode(token);
        } catch (Error) {
            return null;
        }
    }

    getUserById(userId: number): Observable<any> {
        console.log(userId);
        return this.http.get(`${Consts.LOCAL_API_URL}api/User/id/${userId}`)
    }
}
