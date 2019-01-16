import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IUsers } from 'src/app/shared/interfaces';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { EditComponent } from 'src/app/edit/edit.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @ViewChild(EditComponent) edit: EditComponent;



  // modalRef: BsModalRef;

  @Input() contactsUser: Array<IUsers>;
  @Output() delete: EventEmitter<IUsers> = new EventEmitter();

  constructor(
    // private modalService: BsModalService
  ) { }

  ngOnInit() {
  }



  public onDeleteUser(item: IUsers): void {
    this.delete.emit(item);
  }

  onEdit(user) {
    console.log(user);
    // this.modalRef = this.modalService.show(template);
    this.edit.openModal(user);
  }

}
