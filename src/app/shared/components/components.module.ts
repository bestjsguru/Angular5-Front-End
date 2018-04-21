import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChatComponent,
    ContactListComponent
  ],
  exports: [
    ChatComponent,
    ContactListComponent
  ]
})
export class ComponentsModule { }
