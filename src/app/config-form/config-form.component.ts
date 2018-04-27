import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.css']
})
export class ConfigFormComponent implements OnInit {

  node: AngularFireObject<string>;
  text: string = ""

  constructor(private dataService: DataService) { 
    this.node = dataService.createNode();
    //Listen for form changes
    this.node.valueChanges().subscribe(node => {
      this.text = node;
    });
  }

  ngOnInit() {
  }


}
