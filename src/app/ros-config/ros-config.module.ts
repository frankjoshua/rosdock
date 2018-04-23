import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigFormComponent } from './config-form/config-form.component';
import { DataService } from '../services/data.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [ConfigFormComponent],
  exports: [ConfigFormComponent]
})
export class RosConfigModule { }
