import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topbar-button',
  templateUrl: './topbar-button.component.html',
  styleUrl: './topbar-button.component.scss'
})
export class TopbarButtonComponent {
  @Input() title?:string;
  @Input() link?:string[];
  @Input() icon?:string;
}
