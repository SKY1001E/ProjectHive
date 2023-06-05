import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Consts} from "../other/consts";
import {Project} from "../models/project";
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

    constructor(private http: HttpClient) { }

    getTasks(userId: number, projectId: number): Observable<any> {
        const params = new HttpParams()
        .set('userId', userId.toString())
        .set('projectId', projectId.toString());
        return this.http.get(`${Consts.LOCAL_API_URL}api/Task`,{ params })
    }

    addTask(task: Task) {
        return this.http.post(`${Consts.LOCAL_API_URL}api/Task`, task);
    }

    updateTask(task: Task): Observable<any> {
        return this.http.put(`${Consts.LOCAL_API_URL}api/Task/update/${task.id}`, task);
    }

    getTaskById(taskId: number): Observable<any> {
        return this.http.get(`${Consts.LOCAL_API_URL}api/Task/id/${taskId}`)
    }
}
