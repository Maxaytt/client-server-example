import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  template: `
    <label>Hello suka</label>
    <button (click)="getData()">Кнопочка</button>
    <div *ngIf="data">
      <pre>{{ data | json}}</pre>
    </div>
    `
})
export class AppComponent {
  data:any;
  title = 'frontend';
  name='';
  constructor(private httpClient: HttpClient) {}

  getData() {
    this.httpClient.get('http://localhost:5283/WeatherForecast').subscribe({
      next: res => {
        console.log('data received', res);
        this.data = res;
      },
      error: err => console.error('error when retrieving data', err)
    })
  }
}
