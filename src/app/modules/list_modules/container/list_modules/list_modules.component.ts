import { Component, OnInit } from '@angular/core';
import { Module } from '../../types/module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-modules',
  templateUrl: './list_modules.component.html',
  styleUrls: ['./list_modules.component.scss'],
})
export class ListModulesComponent implements OnInit {
  modules: Module[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.modules = [
      {
        session: 'Développement',
        name: 'Angular',
        start_at: 'Lundi 27 Juin 2022',
        end_at: 'Vendredi 01 Juillet 2022',
        place: 'Campus Academy Nantes',
      },
      {
        session: 'Développement',
        name: 'Angular',
        start_at: 'Lundi 27 Juin 2022',
        end_at: 'Vendredi 01 Juillet 2022',
        place: 'Campus Academy Nantes',
      },
      {
        session: 'Développement',
        name: 'Angular',
        start_at: 'Lundi 27 Juin 2022',
        end_at: 'Vendredi 01 Juillet 2022',
        place: 'Campus Academy Nantes',
      },
      {
        session: 'Développement',
        name: 'Angular',
        start_at: 'Lundi 27 Juin 2022',
        end_at: 'Vendredi 01 Juillet 2022',
        place: 'Campus Academy Nantes',
      },
      {
        session: 'Développement',
        name: 'Angular',
        start_at: 'Lundi 27 Juin 2022',
        end_at: 'Vendredi 01 Juillet 2022',
        place: 'Campus Academy Nantes',
      },
      {
        session: 'Développement',
        name: 'Angular',
        start_at: 'Lundi 27 Juin 2022',
        end_at: 'Vendredi 01 Juillet 2022',
        place: 'Campus Academy Nantes',
      },
      {
        session: 'Développement',
        name: 'Angular',
        start_at: 'Lundi 27 Juin 2022',
        end_at: 'Vendredi 01 Juillet 2022',
        place: 'Campus Academy Nantes',
      },
      {
        session: 'Développement',
        name: 'Angular',
        start_at: 'Lundi 27 Juin 2022',
        end_at: 'Vendredi 01 Juillet 2022',
        place: 'Campus Academy Nantes',
      },
      {
        session: 'Développement',
        name: 'Angular',
        start_at: 'Lundi 27 Juin 2022',
        end_at: 'Vendredi 01 Juillet 2022',
        place: 'Campus Academy Nantes',
      },
    ];
  }

  onModuleClick = () => {
    this.router.navigate(['modules/details']);
  };
}
