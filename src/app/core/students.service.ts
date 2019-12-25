import { Injectable } from '@angular/core';

const students = ['John', 'Ben', 'Max'];

@Injectable()
export class StudentsService {


  constructor() {
    console.log('studentsService instanciated');
  }

  getStudents(): any[] {
    return students;
  }
}
