import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InvitationModalComponent } from '../invitation-modal/invitation-modal.component';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  number = 3;
  isOpened = [true, false, true];
  chatText = [ [{man: 'Hi'}],
               [{you: 'Hello, I wnat to talk about the sports-football.'},
                {you: 'This is ChatBot'},
                {man: 'You?'}],
               [{man: 'Hi, there'},
                {you: 'Hello, Nice to meet you'}]
              ];
  cntChatform = 4;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log('isOPende', this.isOpened);
  }

  openModal(evt: any) {
    console.log('evet', evt);

    const dialogRef = this.dialog.open(InvitationModalComponent, {
      width: '650px',
      data: {}
    });
  }

  clickContactItem() {
  }

  getChat(evt: any) {
    console.log('getChat', evt);
  }

}
