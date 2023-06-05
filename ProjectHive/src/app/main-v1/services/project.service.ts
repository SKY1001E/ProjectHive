import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Consts} from "../other/consts";
import {Project} from "../models/project";


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
        return this.http.get(`${Consts.LOCAL_API_URL}api/Project/id/${projectId}`)
    }
}
