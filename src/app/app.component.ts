import {Component, OnInit} from '@angular/core';
import {StudentsService} from './core/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  students: any[];

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    this.students = this.studentsService.getStudents();
  }

}
