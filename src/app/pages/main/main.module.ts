import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, ComponentsModule],
})
export class MainModule {}
