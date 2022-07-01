import { Component, OnDestroy, OnInit } from '@angular/core';
import { Module } from '../../../../core/models/module.model';
import { Router } from '@angular/router';
import { ModuleService } from '../../services/module.service';
import { Subscription } from 'rxjs';
import { EventSourceInput } from '@fullcalendar/angular';
import { InitProcessingService } from 'src/app/core/services/init-processing.service';
import { User } from 'src/app/core/models/users.model';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-list-modules',
  templateUrl: './list_modules.component.html',
  styleUrls: ['./list_modules.component.scss'],
})
export class ListModulesComponent implements OnInit, OnDestroy {
  modulesAVenir: Module[] = [];
  modulesPasser: Module[] = [];
  listSubscription: Subscription[] = [];

  events: EventSourceInput = [];

  constructor(
    private router: Router,
    private moduleService: ModuleService,
    private readonly initProcessingService: InitProcessingService
  ) {
    
  }

  ngOnInit() {
    this.getModule(this.initProcessingService.idUser);
  }


  getModule(idUser: string) {
    this.listSubscription.push(
      this.moduleService.getModules(idUser).subscribe((modules) => {
        this.modulesAVenir = modules.data.filter((module) => dayjs().isBefore(dayjs(`${module.date} ${module.start_time}`)));
        this.modulesPasser = modules.data.filter((module) => dayjs().isAfter(dayjs(`${module.date} ${module.start_time}`)));
        this.events = modules.data.map((m) => {
          return {
            title: m.name,
            start: `${m.date} ${m.start_time}`,
            // url: this.router.navigate(['modules', m.id]),
          };
        });
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
