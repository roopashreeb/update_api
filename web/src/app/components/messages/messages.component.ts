

  // import { Component } from '@angular/core';

  // interface Message {
  //   sender: string;
  //   receiver: string;
  //   content: string;
  // }
  
  // @Component({
  //   selector: 'app-messages',
  //   templateUrl: './messages.component.html',
  //   styleUrls: ['./messages.component.scss']
  // })
  // export class MessagesComponent {
  //   messages: Message[] = [
  //     { sender: 'John', receiver: 'Alice', content: 'Hello Alice!' },
  //     { sender: 'Alice', receiver: 'John', content: 'Hi John!' },
  //     { sender: 'John', receiver: 'Alice', content: 'How are you doing?' },
  //   ];
  //   selectedMessage: Message | null = null;
  
  //   onSelect(message: Message): void {
  //     this.selectedMessage = message;
  //   }
  
  //   onDelete(message: Message): void {
  //     const index = this.messages.indexOf(message);
  //     this.messages.splice(index, 1);
  //     this.selectedMessage = null;
  //   }
  // }


  import { Component } from '@angular/core';

interface Message {
  sender: string;
  receiver: string;
  content: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  messages: Message[] = [
    { sender: 'John', receiver: 'Alice', content: 'Hello Alice!' },
    { sender: 'Alice', receiver: 'John', content: 'Hi John!' },
    { sender: 'John', receiver: 'Alice', content: 'How are you doing?' },
  ];
  selectedMessage: Message | null = null;
  showReplyForm = false;
  replyContent = '';

  onSelect(message: Message): void {
    this.selectedMessage = message;
  }

  onDelete(message: Message): void {
    const index = this.messages.indexOf(message);
    this.messages.splice(index, 1);
    this.selectedMessage = null;
  }

  onReply(message: Message): void {
    const replyMessage: Message = {
      sender: message.receiver,
      receiver: message.sender,
      content: this.replyContent
    };
    this.messages.push(replyMessage);
    this.showReplyForm = false;
    this.replyContent = '';
  }

  onSubmit(): void {
    // Do nothing for now
  }
}

