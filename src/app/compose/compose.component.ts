import { Component, OnInit, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { DataService } from '../services/data.service';
import { CodeBlock } from '../model/codeblock';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  //codeBlockList: any;
  compose: string = '---\nversion: \'3\'\nservices:\n\n';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCodeblocks().subscribe(
      codeBlockList => {
        //this.codeBlockList = codeBlockList;
        this.createCompose(codeBlockList);
      }
    )
  }

  createCompose(codeBlocks: any){
    for(let codeBlock of codeBlocks){
      if(codeBlock){
        console.log(codeBlock);
        this.compose += codeBlock.code + '\n\n';
      }
    }
  }

}
