import { ComposeBlock } from './../model/composeblock';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';

@Injectable()
export class DataService {

  constructor(private db: AngularFireDatabase) { }

  getNodes(): Observable<any> {
    return this.db.list('/nodes').valueChanges();
  }

  createNode(): AngularFireObject<ComposeBlock> {
    const adKey = this.db.list('/ads').push(new ComposeBlock()).key;
    return this.db.object('/ads/' + adKey);
  }

  updateNode(node: AngularFireObject<ComposeBlock>, data: ComposeBlock) {
    return node.update(data);
  }
}
