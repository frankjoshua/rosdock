import { CodeBlock } from './../model/codeblock';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';

const NODE_PATH: string = '/V1';
const ROBOTS: string = "/robots";
const CODEBLOCKS = "/codeblocks";

@Injectable()
export class DataService {

  constructor(private db: AngularFireDatabase) { }

  /**
   * Add a codeBlock to the robot
   * @param codeBlock 
   */
  addCodeBlockToRobot(codeBlock: CodeBlock, robotId: string) {
    this.db.object(NODE_PATH + ROBOTS + '/' + robotId + '/' + CODEBLOCKS + '/' + codeBlock.key).set(codeBlock);
  }

  /**
   * Get all CodeBlocks
   */
  getCodeblocks(): Observable<any> {
    return this.db.list(NODE_PATH + CODEBLOCKS).valueChanges();
  }

  // createCodeblock(key: string): AngularFireObject<CodeBlock> {
  //   let codeBlock = new CodeBlock();
  //   codeBlock.key = key;
  //   this.db.list(NODE_PATH).push(codeBlock);
  //   return this.db.object(NODE_PATH + '/' + codeBlock.key);
  // }

  /**
   * Get a global CodeBlock by id
   * @param key 
   */
  getCodeblock(key: string): AngularFireObject<CodeBlock> {
    return this.db.object(NODE_PATH + CODEBLOCKS + '/' + key);
  }

  /**
   * Update a global code block
   * @param node 
   * @param data 
   */
  updateCodeblock(node: AngularFireObject<CodeBlock>, data: CodeBlock) {
    return node.update(data);
  }
}
