import { Component } from '@angular/core';

@Component({
  selector: 'vexius-layout',
  styleUrls: ['./layout.component.scss'],
  template: `
    <vexius-header></vexius-header>
    <main class="vexius-layout">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class LayoutComponent {}
