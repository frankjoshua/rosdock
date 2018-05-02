import { Component, OnInit, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { DataService } from '../services/data.service';
import { CodeBlock } from '../model/codeblock';

const COMPOSE_HEADER: string = '---\nversion: \'3\'\nservices:\n\n';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  compose: string = COMPOSE_HEADER;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getRobotCodeblocks().subscribe(
      codeBlockList => {
        //this.codeBlockList = codeBlockList;
        this.createCompose(codeBlockList);
      }
    )
  }

  createCompose(codeBlocks: any){
    //Set the header
    this.compose = COMPOSE_HEADER;
    //Add the rest of the blocks
    for(let codeBlock of codeBlocks){
      if(codeBlock){
        this.compose += codeBlock.code + '\n\n';
      }
    }
  }

}
