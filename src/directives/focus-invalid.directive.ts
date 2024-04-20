/* eslint-disable @angular-eslint/directive-selector */
import {
  Directive,
  OnInit,
  HostListener,
  ElementRef,
  Optional,
  Host,
} from '@angular/core';
import { FormSubmitDirective } from './form-submit.directive';
import { Observable, EMPTY, merge } from 'rxjs';
import { NgControl } from '@angular/forms';
import * as _ from 'lodash';

@Directive({
  selector: '[formControl], [formControlName]',
})
export class FocusInvalidDirective implements OnInit {
  public submit$: Observable<Event>;

  constructor(
    private el: ElementRef,
    private controlDir: NgControl,
    @Optional() @Host() private form: FormSubmitDirective
  ) {
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }
  @HostListener('submit')
  ngOnInit() {
    merge(this.submit$)
      .pipe()
      .subscribe((v) => {
        console.log("V :: ", v);
        
        if (!_.isNull(this.control?.errors)) {
          this.onFormSubmit();
        }
      });
  }
  onFormSubmit() {
    const Control = this.el.nativeElement;
    const invalidControl =
      this.el.nativeElement.className.includes('ng-invalid');
    if (invalidControl) {
      Control.focus();
    }
    console.log("CONTROL :: ", Control);
    
  }
  // Getter for getting control
  get control() {
    return this.controlDir.control;
  }
}
