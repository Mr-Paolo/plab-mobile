import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: []
})
export class StepComponent {
    @Input() title: string
    instructions: false
    constructor() { }


}
