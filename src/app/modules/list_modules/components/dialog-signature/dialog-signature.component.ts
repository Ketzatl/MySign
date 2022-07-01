import { SignaturePadComponent } from '@almothafar/angular-signature-pad';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog-signature',
  templateUrl: './dialog-signature.component.html',
  styleUrls: ['./dialog-signature.component.css']
})
export class DialogSignatureComponent implements OnInit, AfterViewInit {

  signatureImg!: string

  signaturePadOptions = {
    // passed through to szimek/signature_pad constructor
    minWidth: 5,
    canvasWidth: 500,
    canvasHeight: 300,
    backgroundColor: '#fafafa',
  };

  @ViewChild('signature') signaturePad!: SignaturePadComponent;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onEnd event
    // console.log('Completed drawing', event);
    // console.log(this.signaturePad.toDataURL());
    this.signatureImg = this.signaturePad.toDataURL()
    // this.ref.close(this.signatureImg)
  }

  saveSignature() {
    this.ref.close(this.signatureImg)
  }

  drawStart(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onBegin event
    // console.log('Start drawing', event);
  }

}
