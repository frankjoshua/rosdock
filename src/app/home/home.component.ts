import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uuid: string;
  constructor() { }

  ngOnInit() {
    this.uuid = uuid();
  }

}
