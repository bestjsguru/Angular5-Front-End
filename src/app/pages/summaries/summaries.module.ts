import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule, MatTableModule } from '@angular/material';

import { SummariesRoutingModule } from './summaries-routing.module';
import { SummariesComponent } from './summaries.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SummariesRoutingModule,
    MatSortModule,
    MatTableModule,
    ComponentsModule,
    RouterModule
  ],
  declarations: [SummariesComponent]
})
export class SummariesModule { }
