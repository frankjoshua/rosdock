import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uuid: string;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.uuid = uuid();
  }

}
