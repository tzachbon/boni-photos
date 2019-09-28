import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

type ContactUsFormControl = 'fullName' | 'message' | 'email' | 'phone';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactUsFormComponent implements OnInit {
  form: FormGroup;
  submitButtonText = `צור איתנו קשר`;
  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  get formControls() {
    if (this.form) {
      return Object.keys(this.form.controls);
    }
    return [];
  }

  getPlaceHolder(type: ContactUsFormControl) {
    switch (type) {
      case 'fullName':
        return 'שם פרטי';
      case 'message':
        return 'מה בא לך להגיע לנו...';
      case 'email':
        return 'אימייל';
      case 'phone':
        return 'מספר נייד';
    }
  }

  getControlType(type: ContactUsFormControl) {
    switch (type) {
      case 'email':
        return type;
      case 'phone':
        return 'number';
      default:
        return 'text';
    }
  }

  onSubmit() {

  }

}
