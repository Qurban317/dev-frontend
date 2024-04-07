import { Directive, Optional, Host, ComponentRef, ViewContainerRef, ComponentFactoryResolver, Input, OnInit, ElementRef, Inject } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FORM_ERRORS } from '../constants/form-errors';
import { FormSubmitDirective } from './form-submit.directive';
import { merge, Observable, fromEvent, EMPTY } from 'rxjs';
import { ControlErrorComponent } from '../shared/control-error/control-error.component';
import { ControlErrorContainerDirective } from './control-error-container.directive';
import { shareReplay } from 'rxjs/operators';
import * as _ from 'lodash';

@Directive({
  selector: '[formControl], [formControlName]',
})
export class ControlErrorsDirective implements OnInit {
  private ref: ComponentRef<ControlErrorComponent> | undefined;
  private container: ViewContainerRef;
  private submit$: Observable<Event>;
  private blur$: Observable<Event>;

  @Input() customErrors: any = {};

  constructor(
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    @Optional() controlErrorContainer: ControlErrorContainerDirective,
    @Inject(FORM_ERRORS) private errors: any,
    @Optional() @Host() private form: FormSubmitDirective,
    private host: ElementRef<HTMLFormElement>,
    private controlDir: NgControl
  ) {
    this.container = controlErrorContainer ? controlErrorContainer.vcr : this.vcr;
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
    this.blur$ = this.form ? fromEvent(this.element, 'blur').pipe(shareReplay(1)) : EMPTY;
  }

  private get element() {
    return this.host.nativeElement;
  }

  ngOnInit() {
    merge(this.submit$, this.blur$).subscribe(() => {
      const controlErrors = this.control?.errors;

      if (controlErrors) {
        const firstKey = Object.keys(controlErrors)[0];
        const getError = this.errors[firstKey];
        const text = this.customErrors[firstKey] || getError(controlErrors[firstKey]);
        this.setError(text);
      } else if (this.ref) {
        this.setError('');
      }
    });
  }

  private get control() {
    return this.controlDir.control;
  }

  private setError(text: string) {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(ControlErrorComponent);
      this.ref = this.container.createComponent(factory);
    }

    this.ref.instance.text = text;
    // Move the error message next to the closing tag of the mat-form-field
    const matFormField = this.element.closest('mat-form-field');
    if (matFormField) {
      matFormField.insertAdjacentElement('afterend', this.ref.location.nativeElement);
    }
  }
}
