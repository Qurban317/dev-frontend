/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.scss'],
})
export class NoContentComponent implements OnInit {
  @Input() iconName: string | undefined;
  @Input() message: string | undefined;
  @Input() styleClass: string | undefined;
  constructor() {}

  ngOnInit() {}
}
