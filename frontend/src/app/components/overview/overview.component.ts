import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  constructor(private http: HttpClient) {}

  excel() {
    this.http
      .get('http://localhost:3000/todos/excel', { responseType: 'blob' })
      .subscribe({
        next: (blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'QLNS.xlsx'; // Tên file tải về
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        },
        error: (err) => {
          console.error('Error: ', err);
          alert('An error occurred while registering the employee');
        },
      });
  }
}
