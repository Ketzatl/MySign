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
    console.log('ici')
    this.listSubscription.push(
      this.moduleService.getModules('1').subscribe((modules) => {
        this.modules = modules.data;
      })
    )

    // this.modules = [
    //   {
    //     city: 'Nantes',
    //     date: 'Mercredi 29 Juin',
    //     duration: '4 heures',
    //     id: '1',
    //     intervenant: {
    //       comment: "Ceci est le commentaire de l'intervenant",
    //       id: '2',
    //       module: 'Cours Angular',
    //       signature: 'https://myurldelamortquitue.fr',
    //       state: {
    //         code: 'VOICI MON CODE TKT',
    //         label: 'ATTENDU',
    //       },
    //       user: {
    //         email: 'toto@gmail.com',
    //         first_name: 'Nicolas',
    //         id: '1',
    //         last_name: 'HAMY',
    //         role: 'Le boss',
    //       },
    //     },
    //     name: 'C moi lintervenant',
    //     session: 'Développement',
    //     start: '9h',
    //     state: {
    //       code: 'VOICI MON CODE TKT',
    //       label: 'ATTENDU',
    //     },
    //     student: [
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux1@gmail.com',
    //           first_name: 'Margaux',
    //           id: '2',
    //           last_name: 'DECHAUD',
    //           role: 'La nullos hehe',
    //         },
    //       },
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux2@gmail.com',
    //           first_name: 'Margauxv2',
    //           id: '3',
    //           last_name: 'DECHAUDv2',
    //           role: 'La nullosv2 hehe',
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     city: 'Bordeaux',
    //     date: 'Mercredi 29 Juin',
    //     duration: '4 heures',
    //     id: '2',
    //     intervenant: {
    //       comment: "Ceci est le commentaire de l'intervenant",
    //       id: '2',
    //       module: 'Cours Angular',
    //       signature: 'https://myurldelamortquitue.fr',
    //       state: {
    //         code: 'VOICI MON CODE TKT',
    //         label: 'ATTENDU',
    //       },
    //       user: {
    //         email: 'toto@gmail.com',
    //         first_name: 'Nicolas',
    //         id: '1',
    //         last_name: 'HAMY',
    //         role: 'Le boss',
    //       },
    //     },
    //     name: 'C moi lintervenant',
    //     session: 'Développement',
    //     start: '9h',
    //     state: {
    //       code: 'VOICI MON CODE TKT',
    //       label: 'ATTENDU',
    //     },
    //     student: [
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux1@gmail.com',
    //           first_name: 'Margaux',
    //           id: '2',
    //           last_name: 'DECHAUD',
    //           role: 'La nullos hehe',
    //         },
    //       },
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux2@gmail.com',
    //           first_name: 'Margauxv2',
    //           id: '3',
    //           last_name: 'DECHAUDv2',
    //           role: 'La nullosv2 hehe',
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     city: 'Nantes',
    //     date: 'Mercredi 29 Juin',
    //     duration: '4 heures',
    //     id: '3',
    //     intervenant: {
    //       comment: "Ceci est le commentaire de l'intervenant",
    //       id: '2',
    //       module: 'Cours Angular',
    //       signature: 'https://myurldelamortquitue.fr',
    //       state: {
    //         code: 'VOICI MON CODE TKT',
    //         label: 'ATTENDU',
    //       },
    //       user: {
    //         email: 'toto@gmail.com',
    //         first_name: 'Nicolas',
    //         id: '1',
    //         last_name: 'HAMY',
    //         role: 'Le boss',
    //       },
    //     },
    //     name: 'C moi lintervenant',
    //     session: 'Développement',
    //     start: '9h',
    //     state: {
    //       code: 'VOICI MON CODE TKT',
    //       label: 'ATTENDU',
    //     },
    //     student: [
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux1@gmail.com',
    //           first_name: 'Margaux',
    //           id: '2',
    //           last_name: 'DECHAUD',
    //           role: 'La nullos hehe',
    //         },
    //       },
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux2@gmail.com',
    //           first_name: 'Margauxv2',
    //           id: '3',
    //           last_name: 'DECHAUDv2',
    //           role: 'La nullosv2 hehe',
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     city: 'Nantes',
    //     date: 'Mercredi 29 Juin',
    //     duration: '4 heures',
    //     id: '4',
    //     intervenant: {
    //       comment: "Ceci est le commentaire de l'intervenant",
    //       id: '2',
    //       module: 'Cours Angular',
    //       signature: 'https://myurldelamortquitue.fr',
    //       state: {
    //         code: 'VOICI MON CODE TKT',
    //         label: 'ATTENDU',
    //       },
    //       user: {
    //         email: 'toto@gmail.com',
    //         first_name: 'Nicolas',
    //         id: '1',
    //         last_name: 'HAMY',
    //         role: 'Le boss',
    //       },
    //     },
    //     name: 'C moi lintervenant',
    //     session: 'Développement',
    //     start: '9h',
    //     state: {
    //       code: 'VOICI MON CODE TKT',
    //       label: 'ATTENDU',
    //     },
    //     student: [
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux1@gmail.com',
    //           first_name: 'Margaux',
    //           id: '2',
    //           last_name: 'DECHAUD',
    //           role: 'La nullos hehe',
    //         },
    //       },
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux2@gmail.com',
    //           first_name: 'Margauxv2',
    //           id: '3',
    //           last_name: 'DECHAUDv2',
    //           role: 'La nullosv2 hehe',
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     city: 'Nantes',
    //     date: 'Mercredi 29 Juin',
    //     duration: '4 heures',
    //     id: '5',
    //     intervenant: {
    //       comment: "Ceci est le commentaire de l'intervenant",
    //       id: '2',
    //       module: 'Cours Angular',
    //       signature: 'https://myurldelamortquitue.fr',
    //       state: {
    //         code: 'VOICI MON CODE TKT',
    //         label: 'ATTENDU',
    //       },
    //       user: {
    //         email: 'toto@gmail.com',
    //         first_name: 'Nicolas',
    //         id: '1',
    //         last_name: 'HAMY',
    //         role: 'Le boss',
    //       },
    //     },
    //     name: 'C moi lintervenant',
    //     session: 'Développement',
    //     start: '9h',
    //     state: {
    //       code: 'VOICI MON CODE TKT',
    //       label: 'ATTENDU',
    //     },
    //     student: [
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux1@gmail.com',
    //           first_name: 'Margaux',
    //           id: '2',
    //           last_name: 'DECHAUD',
    //           role: 'La nullos hehe',
    //         },
    //       },
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux2@gmail.com',
    //           first_name: 'Margauxv2',
    //           id: '3',
    //           last_name: 'DECHAUDv2',
    //           role: 'La nullosv2 hehe',
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     city: 'Nantes',
    //     date: 'Mercredi 29 Juin',
    //     duration: '4 heures',
    //     id: '6',
    //     intervenant: {
    //       comment: "Ceci est le commentaire de l'intervenant",
    //       id: '2',
    //       module: 'Cours Angular',
    //       signature: 'https://myurldelamortquitue.fr',
    //       state: {
    //         code: 'VOICI MON CODE TKT',
    //         label: 'ATTENDU',
    //       },
    //       user: {
    //         email: 'toto@gmail.com',
    //         first_name: 'Nicolas',
    //         id: '1',
    //         last_name: 'HAMY',
    //         role: 'Le boss',
    //       },
    //     },
    //     name: 'C moi lintervenant',
    //     session: 'Développement',
    //     start: '9h',
    //     state: {
    //       code: 'VOICI MON CODE TKT',
    //       label: 'ATTENDU',
    //     },
    //     student: [
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux1@gmail.com',
    //           first_name: 'Margaux',
    //           id: '2',
    //           last_name: 'DECHAUD',
    //           role: 'La nullos hehe',
    //         },
    //       },
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux2@gmail.com',
    //           first_name: 'Margauxv2',
    //           id: '3',
    //           last_name: 'DECHAUDv2',
    //           role: 'La nullosv2 hehe',
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     city: 'Nantes',
    //     date: 'Mercredi 29 Juin',
    //     duration: '4 heures',
    //     id: '7',
    //     intervenant: {
    //       comment: "Ceci est le commentaire de l'intervenant",
    //       id: '2',
    //       module: 'Cours Angular',
    //       signature: 'https://myurldelamortquitue.fr',
    //       state: {
    //         code: 'VOICI MON CODE TKT',
    //         label: 'ATTENDU',
    //       },
    //       user: {
    //         email: 'toto@gmail.com',
    //         first_name: 'Nicolas',
    //         id: '1',
    //         last_name: 'HAMY',
    //         role: 'Le boss',
    //       },
    //     },
    //     name: 'C moi lintervenant',
    //     session: 'Développement',
    //     start: '9h',
    //     state: {
    //       code: 'VOICI MON CODE TKT',
    //       label: 'ATTENDU',
    //     },
    //     student: [
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux1@gmail.com',
    //           first_name: 'Margaux',
    //           id: '2',
    //           last_name: 'DECHAUD',
    //           role: 'La nullos hehe',
    //         },
    //       },
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux2@gmail.com',
    //           first_name: 'Margauxv2',
    //           id: '3',
    //           last_name: 'DECHAUDv2',
    //           role: 'La nullosv2 hehe',
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     city: 'Nantes',
    //     date: 'Mercredi 29 Juin',
    //     duration: '4 heures',
    //     id: '8',
    //     intervenant: {
    //       comment: "Ceci est le commentaire de l'intervenant",
    //       id: '2',
    //       module: 'Cours Angular',
    //       signature: 'https://myurldelamortquitue.fr',
    //       state: {
    //         code: 'VOICI MON CODE TKT',
    //         label: 'ATTENDU',
    //       },
    //       user: {
    //         email: 'toto@gmail.com',
    //         first_name: 'Nicolas',
    //         id: '1',
    //         last_name: 'HAMY',
    //         role: 'Le boss',
    //       },
    //     },
    //     name: 'C moi lintervenant',
    //     session: 'Développement',
    //     start: '9h',
    //     state: {
    //       code: 'VOICI MON CODE TKT',
    //       label: 'ATTENDU',
    //     },
    //     student: [
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux1@gmail.com',
    //           first_name: 'Margaux',
    //           id: '2',
    //           last_name: 'DECHAUD',
    //           role: 'La nullos hehe',
    //         },
    //       },
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux2@gmail.com',
    //           first_name: 'Margauxv2',
    //           id: '3',
    //           last_name: 'DECHAUDv2',
    //           role: 'La nullosv2 hehe',
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     city: 'Nantes',
    //     date: 'Mercredi 29 Juin',
    //     duration: '4 heures',
    //     id: '9',
    //     intervenant: {
    //       comment: "Ceci est le commentaire de l'intervenant",
    //       id: '2',
    //       module: 'Cours Angular',
    //       signature: 'https://myurldelamortquitue.fr',
    //       state: {
    //         code: 'VOICI MON CODE TKT',
    //         label: 'ATTENDU',
    //       },
    //       user: {
    //         email: 'toto@gmail.com',
    //         first_name: 'Nicolas',
    //         id: '1',
    //         last_name: 'HAMY',
    //         role: 'Le boss',
    //       },
    //     },
    //     name: 'C moi lintervenant',
    //     session: 'Développement',
    //     start: '9h',
    //     state: {
    //       code: 'VOICI MON CODE TKT',
    //       label: 'ATTENDU',
    //     },
    //     student: [
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux1@gmail.com',
    //           first_name: 'Margaux',
    //           id: '2',
    //           last_name: 'DECHAUD',
    //           role: 'La nullos hehe',
    //         },
    //       },
    //       {
    //         comment: "Ceci est le commentaire de l'etudiant",
    //         id: '2',
    //         module: 'Cours Angular',
    //         signature: 'https://myurldelamortquitue.fr',
    //         state: {
    //           code: 'VOICI MON CODE TKT',
    //           label: 'ATTENDU',
    //         },
    //         user: {
    //           email: 'margaux2@gmail.com',
    //           first_name: 'Margauxv2',
    //           id: '3',
    //           last_name: 'DECHAUDv2',
    //           role: 'La nullosv2 hehe',
    //         },
    //       },
    //     ],
    //   },
    // ];
  
  }

  // Events
  onModuleClick = (idModule: string) => {
    this.router.navigate(['modules', 'details', idModule]);
  };

  ngOnDestroy(): void {
    this.listSubscription.forEach((s) => s.unsubscribe());
  }
}
