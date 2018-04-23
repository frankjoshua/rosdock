import { AngularFireDatabase } from 'angularfire2/database';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.css']
})
export class ConfigFormComponent implements OnInit {

  nodeForm: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit() {
  }

}
