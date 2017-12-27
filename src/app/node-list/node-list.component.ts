import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.css']
})
export class NodeListComponent implements OnInit {
  nodesObservable: Observable<any[]>;

  constructor(private service: DataService) { }

  ngOnInit() {
   this.nodesObservable = this.service.getNodes();
  }

}
