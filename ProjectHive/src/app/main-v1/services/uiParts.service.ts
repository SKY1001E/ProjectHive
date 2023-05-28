import {Injectable, TemplateRef} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UiPartService {

  showMainNavbar: Subject<boolean> = new Subject<boolean>();
  headerTemplate!: TemplateRef<any>;

  constructor(private http: HttpClient) { }
}
