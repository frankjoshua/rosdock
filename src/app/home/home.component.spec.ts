import { AngularFireDatabase } from 'angularfire2/database';
import { DataService } from './../services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ConfigFormComponent } from '../config-form/config-form.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockFirebase: any = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        ConfigFormComponent
     ],
     imports: [FormsModule, ReactiveFormsModule],
     providers: [DataService,
    {provide: AngularFireDatabase, useValue: mockFirebase}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a config componect', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-config-form')).not.toEqual(null);
  }));
});
