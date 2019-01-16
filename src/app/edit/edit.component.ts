import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { IUsers } from '../shared/interfaces';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user = {
    first: ''
  };
  @ViewChild('userModal') userModal;

  private modalRef: BsModalRef;


  @Input() users;
  @Input() edit;

  // @Output() closeModal = new EventEmitter();

  constructor(
    private modalService: BsModalService

   ) { }

  ngOnInit() {
    console.log(this.users);
    console.log(this.edit);
  }



openModal(user) {
  this.user.first = user.first;
  // console.log('openModal')
  this.modalRef = this.modalService.show(this.userModal);
}

closeModal(){
  // console.log('header close')
  // this.modalRef.hide();
}





}
