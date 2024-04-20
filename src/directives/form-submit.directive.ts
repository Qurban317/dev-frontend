/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Directive({
    selector: 'form'
})
export class FormSubmitDirective {
    public submit$ = fromEvent(this.element, 'submit').pipe(shareReplay(1));

    constructor(private host: ElementRef<HTMLFormElement>) { }

    // Getter to get form element
    get element() {
        return this.host.nativeElement;
    }
}
