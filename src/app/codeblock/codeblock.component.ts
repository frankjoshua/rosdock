import { CodeBlock } from './../model/codeblock';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AngularFireObject } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-codeblock',
  templateUrl: './codeblock.component.html',
  styleUrls: ['./codeblock.component.css']
})
export class CodeblockComponent implements OnInit {

  node: AngularFireObject<CodeBlock>;
  block: CodeBlock = new CodeBlock();
  name: string = "";

  constructor(private dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.block.key = params.key;
      this.node = this.dataService.getCodeblock(this.block.key);
      //Listen for node changes
      this.node.valueChanges().subscribe(node => {
        if(node){
          this.name = node.name;
          this.block = node;
        }
      });
    }); 
  }

  onChange(event) {
    if(event){
      this.block.code = event;
    }
    this.dataService.updateCodeblock(this.node, this.block);
  }

}
