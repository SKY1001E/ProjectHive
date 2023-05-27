import {Injectable, TemplateRef} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiPartService {

  showMainNavbar: Subject<boolean> = new Subject<boolean>();
  headerTemplate!: TemplateRef<any>;

  constructor() { }
}
