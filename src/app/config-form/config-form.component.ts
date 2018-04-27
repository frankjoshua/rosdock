import { ComposeBlock } from './../model/composeblock';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.css']
})
export class ConfigFormComponent implements OnInit {

  node: AngularFireObject<ComposeBlock>;
  block: ComposeBlock = new ComposeBlock();
  debug: string = "";

  constructor(private dataService: DataService) { 
    this.node = dataService.getNode("MY_NODE_KEY");
    //Listen for node changes
    this.node.valueChanges().subscribe(node => {
      if(node){
        this.debug = node.code;
        this.block = node;
      }
    });
  }

  ngOnInit() {
  }

  onChange(event) {
    this.block.code = event;
    this.debug = event;
    this.dataService.updateNode(this.node, this.block);
  }

}
