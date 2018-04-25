import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.css']
})
export class ConfigFormComponent implements OnInit {

  nodeForm: FormGroup;
  node: AngularFireObject<any>;

  constructor(private dataService: DataService, private fb: FormBuilder) { 
    this.node = dataService.createNode();
    this.buildForm();
  }

  ngOnInit() {
  }

  saveNode() {
    if (this.nodeForm.status != 'VALID') {
      console.log('form is not valid, cannot save to database')
      return
    }

    const data = this.nodeForm.value
    this.dataService.updateAd(this.node, data)
  }


  private buildForm() {
    this.nodeForm = this.fb.group({
      data:    ['', Validators.required ]
    });
    this.node.valueChanges().subscribe(node => {
      this.nodeForm.patchValue(node);
      console.log(node);
    })
  }

}
