import { CodeBlock } from './../model/codeblock';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';

const NODE_PATH: string = '/nodes';

@Injectable()
export class DataService {

  constructor(private db: AngularFireDatabase) { }

  getCodeblocks(): Observable<any> {
    return this.db.list(NODE_PATH).valueChanges();
  }

  createCodeblock(key: string): AngularFireObject<CodeBlock> {
    let codeBlock = new CodeBlock();
    codeBlock.key = key;
    this.db.list(NODE_PATH).push(codeBlock);
    return this.db.object(NODE_PATH + '/' + codeBlock.key);
  }

  getCodeblock(key: string): AngularFireObject<CodeBlock> {
    return this.db.object(NODE_PATH + '/' + key);
  }

  updateCodeblock(node: AngularFireObject<CodeBlock>, data: CodeBlock) {
    return node.update(data);
  }
}
