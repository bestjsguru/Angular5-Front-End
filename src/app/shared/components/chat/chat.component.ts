import { Component, OnInit, ViewChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnChanges {
  @Input() chatdata;
  @ViewChild('chatcontainer') chatContainer;
  @Output() chatData = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log('chatdata', this.chatdata);
  }

  closeChat(event: Event) {
    event.stopPropagation();
    this.chatContainer.nativeElement.style.display = 'none';
  }

  openChat() {
    this.chatContainer.nativeElement.style.display = 'block';
  }

  enterChat(evt: any) {
    console.log('evt', evt);
    this.chatData.emit({
      id: 1,
      chat: evt
    });
  }
}
