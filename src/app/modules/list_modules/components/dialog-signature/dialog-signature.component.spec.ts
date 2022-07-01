import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSignatureComponent } from './dialog-signature.component';

describe('DialogSignatureComponent', () => {
  let component: DialogSignatureComponent;
  let fixture: ComponentFixture<DialogSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
