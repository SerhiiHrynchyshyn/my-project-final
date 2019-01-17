import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // user = {
  //   first: ''
  // };

  @ViewChild('userModal') userModal;

  private modalRef: BsModalRef;
  @Input() users;
  @Input() edit;

  public first: string;
  public last: string;
  public email: string;
  public phone: number;



  constructor(
    private modalService: BsModalService

  ) { }

  ngOnInit() {
    console.log(this.users);
    console.log(this.edit);
  }



  openModal(edit) {
    // this.user.first = user.first;
    this.modalRef = this.modalService.show(this.userModal);
  }

  public onSubmit() {
    console.log(this.first, this.last, this.email, this.phone);
  }






}
