import { Injectable } from '@angular/core';

const students = ['John', 'Ben', 'Max']

@Injectable()
export class StudentsService {


  constructor() { }

  getStudents(): any[] {
    return students;
  }
}
