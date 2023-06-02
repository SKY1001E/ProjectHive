import { Injectable } from '@angular/core';
import {Auth} from "../models/auth";
import {Observable, pipe, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Consts} from "../other/consts";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

    get token(): string | null {
        return localStorage.getItem('token')!
    }

    login(auth: Auth): Observable<any> {
    return this.http.post(`${Consts.LOCAL_API_URL}api/Auth/login`, auth)
        .pipe(tap(this.setToken));
    }

    register(auth: Auth): Observable<any> {
      return this.http.post(`${Consts.LOCAL_API_URL}api/Auth/register`, auth);
    }

    logout() {
        this.setToken(null)
    }

    isAuthenticated(): boolean{
        return !!this.token
    }

    private setToken(response: any | null) {
        if(response){
            localStorage.setItem('token', response.token!)
        } else {
            localStorage.clear()
        }
    }
}
