import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() name: string;
  @Input() type: 'solid' | 'outline' = 'solid';

  constructor() {}

  ngOnInit(): void {}
}
