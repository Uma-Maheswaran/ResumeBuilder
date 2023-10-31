import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styles: [
  ]
})
export class SummaryComponent {
  @Input() summaryString : string = '';
  @Output() summaryStringChange = new EventEmitter<string>();
}
