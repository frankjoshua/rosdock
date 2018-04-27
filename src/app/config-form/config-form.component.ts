import { ComposeBlock } from './../model/composeblock';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';
import { AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.css']
})
export class ConfigFormComponent implements OnInit {

  nodeForm: FormGroup;
  node: AngularFireObject<ComposeBlock>;
  block: ComposeBlock = new ComposeBlock();
  keys: string[][] = [];
  t: string = "testing...";

  constructor(private dataService: DataService, private fb: FormBuilder) { 
    this.node = dataService.createNode();
    this.buildForm();
  }

  ngOnInit() {
  }

  saveNode() {
    if (this.nodeForm.status != 'VALID') {
      console.log('form is not valid, cannot save to database');
      return;
    }

    const data = this.nodeForm.value;
    this.dataService.updateNode(this.node, data);
    console.log(data);
  }


  private buildForm() {
    //Create From
    this.nodeForm = this.fb.group([]);
    //Add new controls for each field in ComposeBlock
    for(let key in this.block){
      this.keys['key'] = [key];
      if(!Array.isArray(this.block[key])){
        this.nodeForm.addControl(key, new FormControl(this.block[key]));
      } else {
        this.nodeForm.addControl(key, new FormArray([]));
        this.keys['key'].push(key);
      }
    }
    //Listen for form changes
    this.node.valueChanges().subscribe(node => {
      this.nodeForm.patchValue(node);
      this.block = node;
    })
  }

  get text(): string{
    return this.t;
  }


}
