import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() name: string;
  @Input() value: string;
  @Input() isSelected: boolean;
  @Output() category = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  valueChanged() {
    this.category.emit(this.value);
  }
}
