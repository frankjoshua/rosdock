import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';

@Injectable()
export class DataService {

  constructor(private db: AngularFireDatabase) { }

  getNodes(): Observable<any> {
    return this.db.list('/nodes').valueChanges();
  }

  createNode(): AngularFireObject<string> {
    const adKey = this.db.list('/ads').push("").key;
    return this.db.object('/ads/' + adKey);
  }

  updateNode(node: AngularFireObject<string>, data: string) {
    return node.update(data);
  }
}
