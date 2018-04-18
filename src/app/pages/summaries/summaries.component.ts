import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-summaries',
  templateUrl: './summaries.component.html',
  styleUrls: ['./summaries.component.scss']
})
export class SummariesComponent implements OnInit, AfterViewInit {

//  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  displayedColumns = ['risk', 'name', 'no_account', 'episode_type',
                      'last_visit', 'last_precedure', 'last_location', 'last_status', 'ccd_status'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  rowClicked(row: Element) {
    console.log(row);
  }
}

export interface Element {
  risk: number;
  name: string;
  no_account: number;
  episode_type: string;
  last_visit: Date;
  last_precedure: string;
  last_location: string;
  last_status: string;
  ccd_status: string;
}

const ELEMENT_DATA: Element[] = [
  {risk: 1, name: 'Juan', no_account: 1011, episode_type: 'Total Hip', last_visit: new Date('April 3, 2016'), last_precedure: 'Elective',
      last_location: 'Acadamic Physician Group', last_status: 'CarePathWay', ccd_status: 'Missing' },
  {risk: 2, name: 'Hey', no_account: 1102, episode_type: 'A', last_visit: new Date('December 25, 1895'), last_precedure: 'ABC',
      last_location: 'Lis', last_status: 'Ok', ccd_status: 'AB'},
  {risk: 3, name: 'Hesol', no_account: 1103, episode_type: 'AT', last_visit: new Date('December 25, 1895'), last_precedure: 'ABC',
      last_location: 'Par', last_status: 'Bad', ccd_status: 'ABC'},
  {risk: 3, name: 'Hesol', no_account: 1104, episode_type: 'AT', last_visit: new Date('December 25, 1895'), last_precedure: 'ABC',
      last_location: 'Par', last_status: 'Bad', ccd_status: 'ABC'},
  {risk: 3, name: 'Hesol', no_account: 1104, episode_type: 'AT', last_visit: new Date('December 25, 1895'), last_precedure: 'ABC',
      last_location: 'Par', last_status: 'Bad', ccd_status: 'ABC'},
];
