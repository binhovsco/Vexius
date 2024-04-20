import { Component, Input } from '@angular/core';

@Component({
  selector: 'vexius-logo',
  template: `<h1 class="vexius-logo">
    V<ng-container *ngIf="extended">exius</ng-container>
  </h1>`,
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  @Input() public extended = false;
}
