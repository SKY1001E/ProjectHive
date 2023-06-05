import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Consts} from "../other/consts";
import jwt_decode from 'jwt-decode';
import {Project} from "../models/project";
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    constructor(private http: HttpClient) { }

    getProjectsByUser(userId: number): Observable<any> {
        return this.http.get(`${Consts.LOCAL_API_URL}api/Project/user/${userId}`)
    }

    addProject(project: Project) {
        return this.http.post(`${Consts.LOCAL_API_URL}api/Project/create`, project);
    }

    getProjectById(projectId: number): Observable<any> {
        console.log(projectId);
        return this.http.get(`${Consts.LOCAL_API_URL}api/Project/id/${projectId}`)
    }

    /*getUserInfo(): any {
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
    }*/
}
