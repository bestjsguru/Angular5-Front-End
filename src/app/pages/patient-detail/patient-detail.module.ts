import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDetailComponent } from './patient-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PatientDetailComponent]
})
export class PatientDetailModule { }
