import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, username: 'roopa', password: '1234', token: 'asdafafasd' },
      { id: 2, username: 'jane.doe', password: 'password2' },
    ];
    return { users };
  }
}


  