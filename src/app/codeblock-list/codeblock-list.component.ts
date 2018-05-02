import { CodeBlock } from './../model/codeblock';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codeblock-list',
  templateUrl: './codeblock-list.component.html',
  styleUrls: ['./codeblock-list.component.css']
})
export class CodeblockListComponent implements OnInit {

  codeBlockList: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCodeblocks().subscribe(
      codeBlockList => {
        this.codeBlockList = codeBlockList;
      }
    )
  }

  addCodeBlock(codeBlock: CodeBlock) {
    this.dataService.addCodeBlockToRobot(codeBlock);
  }
}
