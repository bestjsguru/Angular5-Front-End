import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummariesRoutingModule } from './summaries-routing.module';
import { SummariesComponent } from './summaries.component';

@NgModule({
  imports: [
    CommonModule,
    SummariesRoutingModule
  ],
  declarations: [SummariesComponent]
})
export class SummariesModule { }
