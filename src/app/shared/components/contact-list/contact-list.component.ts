import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InvitationModalComponent } from '../invitation-modal/invitation-modal.component';
import { ChatComponent } from '../chat/chat.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  number = 3;
  isOpened = [true, false, true];
  chatText = [ [{you: 'Hello, I wnat to talk about the sports-football.'},
                {you: 'This is ChatBot'},
                {man: 'You?'}]
              ];
  cntChatform = 4;

  infosInvitation = [
    {
      email: '',
      userName: ''
    },
    {
      email: '',
      userName: ''
    },
    {
      email: '',
      userName: ''
    }
  ];

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {

  }

  clickContactItem() {
  }

  getChat(evt: any) {
    console.log('getChat', evt);
  }

  clickAddInfoInvitation() {
    const newInfoInvitation = {
      email: '',
      userName: ''
    };

    this.infosInvitation.push(newInfoInvitation);
  }
}
