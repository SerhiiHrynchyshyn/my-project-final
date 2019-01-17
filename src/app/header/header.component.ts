import { Component, OnInit, ViewChild } from '@angular/core';
import { EditComponent } from '../edit/edit.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(EditComponent) edit: EditComponent;


  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.edit.openModal(null);
  }

}
