import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `<label>Имя маля:</label>
            <input [(ngModel)]="name" placeholder="name">
            <h1>Добро пожаловать {{name}}!</h1>`
})
export class AppComponent {
  title = 'frontend';
  name='';
}
