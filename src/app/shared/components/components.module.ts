import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { InvitationModalComponent } from './invitation-modal/invitation-modal.component';

@NgModule({
  imports: [
    CommonModule
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
  entryComponents: [InvitationModalComponent]
})
export class ComponentsModule { }
