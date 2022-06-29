import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from '../../../../core/models/module.model';
import { modules } from '../../mock-data/mock-module';
import { Student } from '../../../../core/models/student.model';

@Component({
  selector: 'app-details-module',
  templateUrl: './details_module.component.html',
  styleUrls: ['./details_module.component.scss'],
})
export class DetailsModuleComponent implements OnInit {
  id: string | null | undefined;
  targetModule: Module | undefined;
  students!: Student[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    modules.forEach((module) => {
      if (module.id === this.id) {
        // this.targetModule = module;
        this.students = module.student;
      }
    });
  }
}
