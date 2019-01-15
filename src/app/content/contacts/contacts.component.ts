import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUsers } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Input() contactsUser: Array<IUsers>;
  @Output() delete: EventEmitter<IUsers> = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

  public onDeleteUser(item: IUsers): void{
    this.delete.emit(item);
  }

}
