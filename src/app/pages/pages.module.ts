import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderModule } from './header/header.module';
import { PatientDetailModule } from './patient-detail/patient-detail.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    HeaderModule,
    PatientDetailModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
