import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { InvitationModalComponent } from './invitation-modal/invitation-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    ChatComponent,
    ContactListComponent,
    InvitationModalComponent
  ],
  exports: [
    ChatComponent,
    ContactListComponent,
    InvitationModalComponent
  ],
  entryComponents: []
})
export class ComponentsModule { }
