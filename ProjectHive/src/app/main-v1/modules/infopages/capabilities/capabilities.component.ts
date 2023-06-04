import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UiPartService} from "../../../services/uiParts.service";

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.scss']
})
export class CapabilitiesComponent implements OnInit, AfterViewInit {

    public items = [
        {
            'title': 'Проекти',
            'text': 'Створюйте та керуйте проектами ефективно, використовуючи наші інструменти',
            'color': "rgb(255, 78, 78)"
        },
        {
            'title': 'Менеджери',
            'text': 'Ви можете призначати менеджерів, які можуть додавати учасників/призначати задачи, для більш ефективного керування',
            'color': 'rgb(62, 179, 27)'
        },
        {
            'title': 'Задачі і підзадачі',
            'text': 'Ви можете додавати задачі та підзадачі і відстежувати процесс їх виконання',
            'color': 'rgb(243, 255, 71)'
        },
        {
            'title': 'Маркування',
            'text': 'Додавання міток задач дозвляє більш точно деталізувати її стан',
            'color': 'rgb(255, 203, 91)'
        },
        {
            'title': 'Дошки',
            'text': 'Усі задачі можна розбивати на дошки за критеріями прогресу виконання',
            'color': 'rgb(118, 255, 91)'
        },
        {
            'title': 'Календар',
            'text': 'Перегляд календарю дозвляє ознайомитись з усіма найближчими подіями, які стосуються проекту',
            'color': 'rgb(162, 91, 255)'
        },
        {
            'title': 'Вкладення',
            'text': 'Додавання вкладень до задач дозвляє більш детально описати її суть та додає зручності користувачам',
            'color': 'rgb(101, 168, 255)'
        },
        {
            'title': 'Аналітика',
            'text': 'Можна переглядати статистику щодо проекту, використовуючі різні інструменти',
            'color': 'rgb(91, 209, 255)'
        },
    ]
    constructor(
        private uiPart: UiPartService
      ) {
      }
    
      ngOnInit(): void {
        this.uiPart.showMainNavbar.next(true);
      }
    
      ngAfterViewInit(): void {
      }
}
