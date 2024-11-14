import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.scss',
})
export class StaffListComponent {
  StudentArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  name: string = '';
  position: string = '';
  salary: string = '';
  hire_date: string = '';
  date: string = '';
  address: string = '';

  currentStudentID = '';
  constructor(private http: HttpClient) {
    this.getAllStudent();
  }
  ngOnInit(): void {}

  getAllStudent() {
    this.http
      .get('http://localhost:3000/todos')
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        this.StudentArray = resultData;
      });
  }
}
