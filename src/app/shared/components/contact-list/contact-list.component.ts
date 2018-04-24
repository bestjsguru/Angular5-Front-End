import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InvitationModalComponent } from '../invitation-modal/invitation-modal.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openModal(evt: any) {
    console.log('evet', evt);

    const dialogRef = this.dialog.open(InvitationModalComponent, {
      width: '650px',
      data: {}
    });
  }

}
