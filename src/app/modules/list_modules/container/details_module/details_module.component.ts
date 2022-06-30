import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from '../../../../core/models/module.model';
import { Student } from '../../../../core/models/student.model';
import { ModuleService } from '../../services/module.service';
import { Subscription } from 'rxjs';
import { SignaturePadComponent } from '@almothafar/angular-signature-pad';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
  // faEnvelope = faEnvelope;

  @ViewChild('signature')
  public signaturePad!: SignaturePadComponent;

  public signaturePadOptions = {
    // passed through to szimek/signature_pad constructor
    minWidth: 5,
    canvasWidth: 500,
    canvasHeight: 300,
  };

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

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onEnd event
    console.log('Completed drawing', event);
    console.log(this.signaturePad.toDataURL());
  }

  drawStart(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('Start drawing', event);
  }

  ngOnDestroy(): void {
    this.listSubscription.forEach((s) => s.unsubscribe());
  }
}
