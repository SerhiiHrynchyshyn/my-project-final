import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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



openModal(template) {
  // console.log('openModal')
  this.modalRef = this.modalService.show(this.userModal);
}

closeModal(){
  // console.log('header close')
  // this.modalRef.hide();
}





}
