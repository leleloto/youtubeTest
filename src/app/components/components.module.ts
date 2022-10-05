import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos/videos.component';
import { ButtonComponent } from './button/button.component';
import { CategoryComponent } from './category/category.component';

const components = [
  VideosComponent,
  ButtonComponent,
  CategoryComponent,
  VideosComponent,
];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class ComponentsModule {}
