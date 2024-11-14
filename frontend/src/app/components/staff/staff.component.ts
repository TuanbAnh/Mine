import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss',
})
export class StaffComponent {
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
        this.StudentArray = resultData.map((m: any) => {
          console.log(m);

          return {
            ...m,
            date: m.date ? this.formatDate(new Date(m.date)) : null,
            hire_date: m.hire_date
              ? this.formatDate(new Date(m.hire_date))
              : null,
          };
        });
        console.log(this.StudentArray);
      });
  }

  register() {
    let bodyData = {
      name: this.name,
      position: this.position,
      salary: this.salary,
      hire_date: this.hire_date,
      date: this.date,
      address: this.address,
    };

    this.http.post('http://localhost:3000/todos', bodyData).subscribe({
      next: (resultData: any) => {
        alert('Employee Registered Successfully');
        this.getAllStudent();
      },
      error: (err) => {
        console.error('Error: ', err);
        alert('An error occurred while registering the employee');
      },
    });
  }
  setUpdate(data: any) {
    this.name = data.name;
    this.position = data.position;
    this.salary = data.salary;
    this.hire_date = data.hire_date;
    this.date = data.date;
    this.address = data.address;
    this.currentStudentID = data.id;
  }

  formatDate(date: Date) {
    return date.toISOString().split('T')[0];
  }

  UpdateRecords() {
    let bodyData = {
      name: this.name,
      position: this.position,
      salary: this.salary,
      hire_date: this.hire_date,
      date: this.date,
      address: this.address,
    };
    console.log(bodyData);
    this.http
      .put(
        'http://localhost:3000/todos' + '/' + this.currentStudentID,
        bodyData
      )
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Student Registered Updateddd');
        this.getAllStudent();
      });
  }

  save() {
    if (this.currentStudentID == '') {
      this.register();
    } else {
      this.UpdateRecords();
    }

    this.name = '';
    this.position = '';
    this.salary = '';
    this.hire_date = '';
    this.date = '';
    this.address = '';

    this.currentStudentID = '';
  }
  setDelete(data: any) {
    this.http
      .delete('http://localhost:3000/todos' + '/' + data.id)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Student Deletedddd');
        this.getAllStudent();
      });
  }
}
