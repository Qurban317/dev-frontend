import { ChangeDetectionStrategy, Component, Input, ChangeDetectorRef } from '@angular/core';

@Component({
    template: `<p class="help er-text" [class.hide]="ehide">{{etext}}</p>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlErrorComponent {
    public etext: string | undefined;
    public ehide = true;
    @Input() set text(value: string) {
        if (value !== this.etext) {
            this.etext = value;
            this.ehide = !value;
            this.cdr.detectChanges();
        }
    }
    constructor(private cdr: ChangeDetectorRef) { }
}
