import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  @Input() node: any;
  nodeForm: FormGroup;
  keys;
  text;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.nodeForm = this.fb.group(this.node);
    this.keys = Object.keys(this.node);
  }

  onSubmit() {
    console.log("submited");
    this.text = this.node.name;
  }

}
