import { Component, OnInit } from '@angular/core';
import { fade } from '../app.animations';
import { User } from './user-list.interface';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [ fade ],
})
export class UserListComponent implements OnInit {
  public selectedUserId: number;
  public state = 'hide';
  public filteredUsers: User[] = [];
  private users: User[] = [
    {
      id: 1,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=15',
      firstname: 'Deborah',
      lastname: 'Miller',
      age: '25'
    },
    {
      id: 2,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=18',
      firstname: 'Johannes',
      lastname: 'Myles',
      age: '34'
    },
    {
      id: 3,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=345',
      firstname: 'Britta',
      lastname: 'Rhudinbergh',
      age: '43'
    },
    {
      id: 4,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=44',
      firstname: 'Olivia',
      lastname: 'Brown',
      age: '44'
    },
    {
      id: 5,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=657',
      firstname: 'Daniel',
      lastname: 'Rudin',
      age: '32'
    },
    {
      id: 6,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=89',
      firstname: 'Teressa',
      lastname: 'Sandhurst',
      age: '35'
    },
    {
      id: 7,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=877',
      firstname: 'Dina',
      lastname: 'Sokolowski',
      age: '28'
    },
    {
      id: 8,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=81',
      firstname: 'André',
      lastname: 'Szillagy',
      age: '23'
    },
    {
      id: 9,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=33',
      firstname: 'Fabian',
      lastname: 'Stocker',
      age: '45'
    },
    {
      id: 10,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=21',
      firstname: 'Christian',
      lastname: 'Williams',
      age: '41'
    },
  ];

  public ngOnInit(): void {
    this.assignUserList();
  }

  private assignUserList(): void {
    this.filteredUsers = this.users.map((user: User) => {
      return {
        ...user,
        extraInfo: ('Name: ' + user.firstname + ' / Surname: ' + user.lastname + ' / Age: ' + user.age),
      };
    });
  }

  public filterUsers(filterString: string): void {
    if (filterString.length < 3) {
      this.assignUserList();
    } else {
      this.filteredUsers = this.filteredUsers.filter(
        (user: User) => user.firstname.toLowerCase().includes(filterString.toLowerCase()),
      );
    }
  }

  public onSortByAge(): void {
    this.filteredUsers.sort((a: User, b: User) => {
      return Number(a.age) - Number(b.age);
    });
  }

  public onShowExtraInfo(index: number): void {
    if (this.selectedUserId !== index) {
      this.selectedUserId = index;
    } else {
      this.selectedUserId = -1;
    }
  }
}
