import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  contacts: Array<IUsers>;

  constructor() { 
    this.contacts = _listUser;
  }

  ngOnInit() {
  }


}
interface IUsers{
  img: string;
  first: string;
  last: string;
  mail: string;
  phone: number;
}

const _listUser: Array<IUsers> = [
  <IUsers>{
    img: "https://randomuser.me/api/portraits/med/men/4.jpg",
    first: "Bobbie",
    last: "Fernandes",
    mail: 'arthur.smith@example.com',
    phone: +380938005500
  },
  <IUsers>{
    img: "https://randomuser.me/api/portraits/med/men/60.jpg",
    first: "Arthur",
    last: "Smith",
    mail: 'phillip.wade@example.com',
    phone: +30615359154
    
  },
  <IUsers>{
    img: "https://randomuser.me/api/portraits/med/women/68.jpg",
    first: "Alexandra",
    last: "King",
    mail: 'melvin.flesland@example.com',
    phone: +30816215735
  }
]