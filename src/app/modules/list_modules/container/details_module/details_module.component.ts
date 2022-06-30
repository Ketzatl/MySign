import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from '../../../../core/models/module.model';
import { Student } from '../../../../core/models/student.model';
import { ModuleService } from '../../services/module.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details-module',
  templateUrl: './details_module.component.html',
  styleUrls: ['./details_module.component.scss'],
})
export class DetailsModuleComponent implements OnInit, OnDestroy {
  id: string | null | undefined;
  module!: Module;
  students!: Student[];
  listSubscription: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private moduleService: ModuleService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.listSubscription.push(
        this.moduleService.getModule(this.id).subscribe((module) => {
          this.module = module.data;
          this.students = module.data.students;
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.listSubscription.forEach((s) => s.unsubscribe());
  }
}
