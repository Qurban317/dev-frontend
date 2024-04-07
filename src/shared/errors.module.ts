import { NgModule } from '@angular/core';
import { ControlErrorComponent } from './control-error/control-error.component';
import { ControlErrorsDirective } from '../directives/controls.directive';
import { FocusInvalidDirective } from '../directives/focus-invalid.directive';
import { FormSubmitDirective } from '../directives/form-submit.directive';
import { PhoneMaskDirective } from '../directives/phone-mask.directive';
import { NoContentComponent } from './no-content/no-content.component';
import { ControlErrorContainerDirective } from '../directives/control-error-container.directive';

@NgModule({
  declarations: [ControlErrorsDirective, FocusInvalidDirective, FormSubmitDirective, PhoneMaskDirective, ControlErrorContainerDirective, ControlErrorComponent, NoContentComponent],
  exports: [ControlErrorsDirective, FocusInvalidDirective, FormSubmitDirective, PhoneMaskDirective, NoContentComponent, ControlErrorContainerDirective, ControlErrorComponent],
  imports: [],
})
export class ErrorsModule {}
