import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from '../../../../core/models/module.model';
import { Student } from '../../../../core/models/student.model';
import { ModuleService } from '../../services/module.service';
import { Subscription } from 'rxjs';
import { SignaturePadComponent } from '@almothafar/angular-signature-pad';
import { Intervenant } from 'src/app/core/models/intervenant.model';
import { DialogService } from 'primeng/dynamicdialog';
import { DialogSignatureComponent } from '../../components/dialog-signature/dialog-signature.component';
import { ConnectionProcessingService } from 'src/app/core/services/connection-processing.service';
import { db } from 'src/app/core/config/db';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface StateModuleAction {
  state: string;
  action: string;
}
@Component({
  selector: 'app-details-module',
  templateUrl: './details_module.component.html',
  styleUrls: ['./details_module.component.scss'],
})
export class DetailsModuleComponent implements OnInit, OnDestroy {
  id: string | null | undefined;
  module!: Module;
  students!: Student[];
  intervenants!: Intervenant[];
  listSubscription: Subscription[] = [];
  // stateSignature: string;
  // faEnvelope = faEnvelope;

  stateModule!: StateModuleAction;

  isConnected: boolean = true;

  // @ViewChild('signature')
  // public signaturePad!: SignaturePadComponent;

  // public signaturePadOptions = {
  //   // passed through to szimek/signature_pad constructor
  //   minWidth: 5,
  //   canvasWidth: 500,
  //   canvasHeight: 300,
  // };

  constructor(
    private route: ActivatedRoute,
    private moduleService: ModuleService,
    public dialogService: DialogService,
    private connectionProcessingService: ConnectionProcessingService,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.connectionProcessingService.status().subscribe((b: boolean) => {
      this.isConnected = b;
    });

    if (this.id) {
      this.listSubscription.push(
        this.moduleService.getModule(this.id).subscribe((module) => {
          this.module = module.data;
          this.students = module.data.students;
          this.intervenants = module.data.intervenants;
          console.log(this.intervenants);
          let action;

          module.data.state.label === 'Planifié'
            ? (action = 'Démarrer le module')
            : (action = 'Envoyer les signatures');

          this.stateModule = {
            state: module.data.state.label,
            action,
          };
        })
      );
    }
  }

  signatureIntervenant(intervenant: Intervenant) {
    const ref = this.dialogService.open(DialogSignatureComponent, {
      header: 'Signature',
      width: '70%',
    });

    ref.onClose.subscribe(async (result) => {
      if (result) {
        // console.log(result);
        // intervenant.signature = result;
        const updateIntervenant: Intervenant = {
          id: intervenant.id,
          state: { code: 'SIGN' },
        } 

        let indexIntervenant: number = this.intervenants.findIndex((s) => s.id === intervenant.id);
        const intervenants = [...this.intervenants];

        if (this.isConnected) {
          this.moduleService.updateIntervenant(updateIntervenant).subscribe(value => {
            
            intervenants[indexIntervenant] = { ...intervenants, ...value.data };
            this.intervenants = intervenants;
          });
        } else {
          await db.intervenants.add(updateIntervenant);
          intervenants[indexIntervenant] = { ...intervenants, ...updateIntervenant };
            this.intervenants = intervenants;
        }
      }
    })
  }

  signatureStudent(student: Student) {
    const ref = this.dialogService.open(DialogSignatureComponent, {
      header: 'Signature',
      width: '70%',
    });

    ref.onClose.subscribe(async (result) => {
      if (result) {
        const updateStudent: Student = {
          id: student.id,
          state: { code: 'SIGN' },
        }

        let indexStudent: number = this.students.findIndex((s) => s.id === student.id);
        const students = [...this.students];

        if (this.isConnected) {
          this.moduleService.updateStudent(updateStudent).subscribe(value => {
            
            students[indexStudent] = { ...student, ...value.data };
            this.students = students;
          }); 
        } else {
          await db.students.add(updateStudent);
          students[indexStudent] = { ...student, ...updateStudent };
          this.students = students;
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.listSubscription.forEach((s) => s.unsubscribe());
  }
}
