import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IUsers } from 'src/app/shared/interfaces';
import { EditComponent } from 'src/app/edit/edit.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @ViewChild(EditComponent) edit: EditComponent;

  @Input() contactsUser: Array<IUsers>;
  @Output() delete: EventEmitter<IUsers> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }



  public onDeleteUser(item: IUsers): void {
    this.delete.emit(item);
  }

  onEdit(user) {
    console.log(user);
    this.edit.openModal(user);
  }

}
