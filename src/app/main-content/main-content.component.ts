import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


  students: Array<IStudent> = [];

  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'Leah',
      lastName: 'Vicente',
      course: 'Business'
    };

    this.students[1] = {
      id: 2,
      firstName: 'John',
      lastName: 'Smith',
      course: 'Programming'
    };

    this.students[2] = {
      id: 3,
      firstName: 'Jane',
      lastName: 'Doe',
      course: 'Math'
    };

    this.students[3] = {
      id: 4,
      firstName: 'Joe',
      lastName: 'Biden',
      course: 'Politics'
    };
  }

  ngOnInit() {
  }

  addStudent() {
  const student: IStudent = {
    id: 5,
    firstName: 'Mike',
    lastName: 'Tyson',
    course: 'Boxing'
  };

    this.students.push(student);
  }
}
