import { Component, OnDestroy, OnInit } from '@angular/core';
import { Module } from '../../../../core/models/module.model';
import { Router } from '@angular/router';
import { ModuleService } from '../../services/module.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-modules',
  templateUrl: './list_modules.component.html',
  styleUrls: ['./list_modules.component.scss'],
})
export class ListModulesComponent implements OnInit, OnDestroy {
  modules: Module[] = [];
  listSubscription: Subscription[] = [];

  constructor(private router: Router, private moduleService: ModuleService) {}

  ngOnInit() {
    this.listSubscription.push(
      this.moduleService.getModules('1').subscribe((modules) => {
        this.modules = modules.data;
      })
    );
  }

  // Events
  onModuleClick = (idModule: string) => {
    this.router.navigate(['modules', 'details', idModule]);
  };

  ngOnDestroy(): void {
    this.listSubscription.forEach((s) => s.unsubscribe());
  }
}
