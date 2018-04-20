import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild('chatcontainer') chatContanier;
  constructor() { }

  ngOnInit() {
  }

  closeChat(event: Event) {
    event.stopPropagation();
    this.chatContanier.nativeElement.style.display = 'none';
  }

  openChat() {
    this.chatContanier.nativeElement.style.display = 'block';
  }

}
