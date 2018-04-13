import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigFormComponent } from './config-form/config-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConfigFormComponent],
  exports: [ConfigFormComponent]
})
export class RosConfigModule { }
