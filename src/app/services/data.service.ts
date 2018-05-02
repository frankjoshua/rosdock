import { CodeBlock } from './../model/codeblock';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Robot } from '../model/robot';

const NODE_PATH: string = '/V1';
const ROBOT: string = "/robot";
const ROBOTS: string = "/robots";
const CODEBLOCKS = "/codeblocks";
const USERS = "/users";
const PREFS = "/prefs";
const MAIN_USER = "josh";
const ACTIVE_ROBOT = "activeRobot";

@Injectable()
export class DataService {

  activeRobot: string = "NOT_SET";

  constructor(private db: AngularFireDatabase) { 
    this.getPreference(ACTIVE_ROBOT).subscribe(pref => {
      this.activeRobot = pref.robotName;
    });
  }

  /**
   * Add a codeBlock to the robot
   * @param codeBlock 
   */
  addCodeBlockToRobot(codeBlock: CodeBlock) {
    let path = NODE_PATH + ROBOT + '/' + this.activeRobot + '/' + CODEBLOCKS + '/' + codeBlock.key;
    this.db.object(path).set(codeBlock);
  }

  /**
   * Get all CodeBlocks
   */
  getCodeblocks(): Observable<any> {
    return this.db.list(NODE_PATH + CODEBLOCKS).valueChanges();
  }

  getRobotCodeblocks(): Observable<any> {
    return this.getPreference(ACTIVE_ROBOT)
      .map(pref => NODE_PATH + ROBOT + '/' + this.activeRobot + CODEBLOCKS)
      .switchMap(path => this.db.list(path).valueChanges());
  }

  /**
   * Get all robots
   */
  getRobots(): any {
    return this.db.list(NODE_PATH + ROBOTS).valueChanges();
  }

  /**
   * 
   * @param name Get robot by name
   */
  getRobot(name: string): any {
    return this.db.object(NODE_PATH + ROBOTS + '/' + name);
  }

  /**
   * Create new robot
   * @param name 
   */
  createRobot(name: string): any {
    return this.getRobot(name).update(new Robot(name));
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

  /**
   * Set as the current active robot for the user
   * @param robotName 
   */
  activateRobot(robotName: string) {
    this.getPreferenceObject(ACTIVE_ROBOT).update({robotName});
  }

  /**
   * 
   * @param name Get robot by name
   */
  getPreference(name: string): Observable<any> {
    return this.getPreferenceObject(name).valueChanges();
  }

  getPreferenceObject(name: string): AngularFireObject<any> {
    return this.db.object(NODE_PATH + USERS + '/' + MAIN_USER + PREFS + '/' + name);
  }
}
