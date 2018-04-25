import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private db: AngularFireDatabase) { }

  // getNodes(): Observable<any[]> {
  //   return this.db.list('/nodes').valueChanges();
  // }

  createNode(): AngularFireObject<any> {
    const adKey = this.db.list('/ads').push("node").key
    return this.db.object('/ads/' + adKey)
  }

  updateAd(node: AngularFireObject<any>, data: any) {
    return node.update(data)
  }
}
