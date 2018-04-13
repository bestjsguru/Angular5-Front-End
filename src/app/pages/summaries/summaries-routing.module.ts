import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummariesComponent } from './summaries.component';

const routes: Routes = [
  { path: '', component: SummariesComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummariesRoutingModule { }
