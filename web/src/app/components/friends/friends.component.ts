import { Component } from '@angular/core';

interface Friend {
  name: string;
  age: number | null;
}

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent {
  friends: Friend[] = [];
  name: string = '';

  addFriend(name: string): void {
    if (!name) {
      return;
    }
    const newFriend: Friend = {
      name,
      age: null,
    };
    this.friends.push(newFriend);
    this.name = '';
  }

  removeFriend(index: number): void {
    this.friends.splice(index, 1);
  }
}
