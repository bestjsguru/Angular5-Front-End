import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {
  flagAdmittance = true;
  constructor() { }

  ngOnInit() {
  }

  clickAdmittanceButton() {
    this.flagAdmittance = !this.flagAdmittance;
    console.log(this.flagAdmittance);
  }

  clickAddEpisodeButton() {
    alert('Clicked the Add Episode Button');
  }

  clickEditDetailButton() {
    alert('Clicked the Add Episode Button');
  }

}
