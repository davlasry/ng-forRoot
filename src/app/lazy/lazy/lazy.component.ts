import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../core/students.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {
  students: any[];

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.students = this.studentsService.getStudents();
  }

}
