import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { IUsers } from 'src/app/shared/interfaces';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {




  modalRef: BsModalRef;

  @Input() contactsUser: Array<IUsers>;
  @Output() delete: EventEmitter<IUsers> = new EventEmitter(); 

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  public onDeleteUser(item: IUsers): void{
    this.delete.emit(item);
  }
  

  onEdit(template) {
    this.modalRef = this.modalService.show(template);
  }

}
