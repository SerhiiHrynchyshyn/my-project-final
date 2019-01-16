import { Component, OnInit, ViewChild } from '@angular/core';
import { EditComponent } from '../edit/edit.component';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(EditComponent) edit: EditComponent;

  // private modalRef: BsModalRef;

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.edit.openModal(null);
  }

  // closeModal(){
  //   console.log('header close')
  //   // this.modalRef.hide();
  // }

}
