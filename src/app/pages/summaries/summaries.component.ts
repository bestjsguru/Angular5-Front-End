import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-summaries',
  templateUrl: './summaries.component.html',
  styleUrls: ['./summaries.component.scss']
})
export class SummariesComponent implements OnInit, AfterViewInit {

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

  clickAddNewEpisodeButton() {
    alert('Clicked the New Episode Button');
  }

  search() {
    const filterResutls = [];
    ELEMENT_DATA.forEach((element) => {
      console.log(element);
      console.log();
      const isExist = Object.values(element).find((value) => value.toString().includes('so'));
      if (isExist) {
        filterResutls.push(element);
      }
    });
    console.log('filtered results: ', filterResutls);
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
  {risk: 1, name: 'Juan Elison', no_account: 1011, episode_type: 'Total Hip Replacement', last_visit: new Date('April 3, 2016'), last_precedure: 'Elective Hip Replacement',
      last_location: 'Acadamic Physician Group', last_status: 'Care PathWay not set-up', ccd_status: 'Missing' },
  {risk: 2, name: 'Laurie Hoffman', no_account: 1102, episode_type: 'A', last_visit: new Date('December 25, 1895'), last_precedure: 'ABC',
      last_location: 'Lis', last_status: 'Ok', ccd_status: 'AB'},
  {risk: 3, name: 'Mike buxton', no_account: 1103, episode_type: 'AT', last_visit: new Date('December 25, 1895'), last_precedure: 'ABC',
      last_location: 'Par', last_status: 'Bad', ccd_status: 'ABC'},
  {risk: 1, name: 'Hesol', no_account: 1104, episode_type: 'AT', last_visit: new Date('December 25, 1895'), last_precedure: 'ABC',
      last_location: 'Par', last_status: 'Bad', ccd_status: 'ABC'},
  {risk: 2, name: 'Hesol', no_account: 1104, episode_type: 'AT', last_visit: new Date('December 25, 1895'), last_precedure: 'ABC',
      last_location: 'Par', last_status: 'Bad', ccd_status: 'ABC'},
  {risk: 1, name: 'Juan Elison', no_account: 1011, episode_type: 'Total Hip Replacement', last_visit: new Date('April 3, 2016'), last_precedure: 'Elective Hip Replacement',
      last_location: 'Acadamic Physician Group', last_status: 'Care PathWay not set-up', ccd_status: 'Missing' },
  {risk: 2, name: 'Laurie Hoffman', no_account: 1102, episode_type: 'A', last_visit: new Date('December 25, 1895'), last_precedure: 'ABC',
      last_location: 'Lis', last_status: 'Ok', ccd_status: 'AB'},
  {risk: 3, name: 'Mike buxton', no_account: 1103, episode_type: 'AT', last_visit: new Date('December 25, 1895'), last_precedure: 'ABC',
      last_location: 'Par', last_status: 'Bad', ccd_status: 'ABC'},
  {risk: 1, name: 'Hesol', no_account: 1104, episode_type: 'AT', last_visit: new Date('December 25, 1895'), last_precedure: 'ABC',
      last_location: 'Par', last_status: 'Bad', ccd_status: 'ABC'},
  {risk: 2, name: 'Hesol', no_account: 1104, episode_type: 'AT', last_visit: new Date('December 25, 1895'), last_precedure: 'ABC',
      last_location: 'Par', last_status: 'Bad', ccd_status: 'ABC'},
];
