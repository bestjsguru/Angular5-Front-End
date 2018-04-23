import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'summaries', loadChildren: './summaries/summaries.module#SummariesModule' },
      {
        path: 'patient-detail/:id',
        component: PatientDetailComponent,
        pathMatch: 'full'
      },
      { path: '', redirectTo: 'summaries' },
      { path: '**', redirectTo: 'summaries' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
