import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInput } from '@angular/material';
import { Subscription } from 'rxjs';
import { FullpageService } from 'src/app/shared/services/fullpage/fullpage.service';
import { filter, debounceTime } from 'rxjs/operators';

type ContactUsFormControl = 'fullName' | 'message' | 'email' | 'phone';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactUsFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  submitButtonText = `צור איתנו קשר`;
  @ViewChildren('inputRef') inputRef: QueryList<ElementRef<MatInput>>;
  subscription = new Subscription()
  constructor(private cd: ChangeDetectorRef, private fullPageService: FullpageService) { }

  ngOnInit() {
    this.initActiveComponentName();
    this.initForm();
  }

  initActiveComponentName() {
    const fullPage$ = this.fullPageService.activeComponentName
      .pipe(filter(cmpName => cmpName.includes('contact-us')), debounceTime(400))
      .subscribe(componentName => {
        const input = this.inputRef.find(int => int.nativeElement.id === 'fullName');
        if (input) {
          setTimeout(() => {
            input.nativeElement.focus();
            input.nativeElement.focused = true;
          }, 50, input);
        }
      });

    this.subscription.add(fullPage$);
  }

  getAutoComplete(control: ContactUsFormControl) {
    switch (control) {
      case 'fullName':
        return 'cc-name';
      case 'phone':
        return 'tel';
      case 'email':
        return 'email';
      default:
        return 'on';
    }
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
