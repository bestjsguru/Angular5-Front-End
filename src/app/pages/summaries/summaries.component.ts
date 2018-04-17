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
  { risk: 1, name: 'Hey', no_account: 1, episode_type: 'A', last_visit: new Date('December 25, 1995'), last_precedure: 'ABC',
      last_location: 'Lis', last_status: 'Ok', ccd_status: 'A' },
  {risk: 2, name: 'Hey', no_account: 1, episode_type: 'A', last_visit: new Date('December 25, 1895'), last_precedure: 'ABC',
      last_location: 'Lis', last_status: 'Ok', ccd_status: 'A'}
];
