import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInput } from '@angular/material';
import { Subscription } from 'rxjs';
import { FullpageService } from 'src/app/shared/services/fullpage/fullpage.service';
import { filter, debounceTime } from 'rxjs/operators';
import { SectionService } from 'src/app/shared/services/section.service';
import { IProduct } from 'src/app/shared/models/product.interface';
import { HttpService } from '../../../shared/services/http/http.service';

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
  @ViewChild('formRef', { static: true }) formRef: ElementRef<HTMLFormElement>;
  @ViewChildren('inputRef') inputRef: QueryList<ElementRef<MatInput>>;
  subscription = new Subscription();
  @ViewChild('messageRef', { static: false }) messageRef: ElementRef<MatInput>;
  constructor(
    private cd: ChangeDetectorRef,
    private fullPageService: FullpageService,
    private sectionService: SectionService,
    private httpService: HttpService,
  ) { }

  ngOnInit() {
    this.initProductChosenObservable();
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
          }, 100, input);
        }

      });

    this.subscription.add(fullPage$);
  }

  get isFormValid() {
    return this.form ? this.form.invalid : false;
  }

  initProductChosenObservable() {
    const product$ = this.sectionService.chosenProduct$
      .pipe(filter(prd => !!prd))
      .subscribe(product => {
        this.fullPageService.moveTo(3);
        if (this.messageRef) {
          const value = this.messageRef.nativeElement.value;
          if (value.length) {
            this.messageRef.nativeElement.value += ' ' + this.getProductMessage(product);
          } else {
            this.messageRef.nativeElement.value = this.getProductMessage(product);
          }
          this.form.updateValueAndValidity();
          this.cd.detectChanges();
        }
      });
    this.subscription.add(product$);
  }

  getProductMessage(product: IProduct) {
    return `היי רציתי לשאול לגבי ${product.title}`;
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
    if (!this.form || this.form.invalid) {
      console.log('====================================');
      console.log('this form is not valid');
      console.log('====================================');
      return;
    }

    this.httpService.sendContactMessage(this.form.value)
      .subscribe(res => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
