
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeblockComponent } from './codeblock.component';
import { DataService } from '../services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireObject } from 'angularfire2/database';

describe('ConfigFormComponent', () => {
  let component: CodeblockComponent;
  let fixture: ComponentFixture<CodeblockComponent>;
  const mockDataService: any = {
    createNode() {
      return {
        valueChanges(){
          return {
            subscribe(){
              
            }
          }
        }
      };
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeblockComponent ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{provide: DataService, useValue: mockDataService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form', async(() => {
    const fixture = TestBed.createComponent(CodeblockComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).not.toEqual(null);
  }));

  it('form should have a name input', async(() => {
    const fixture = TestBed.createComponent(CodeblockComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#inputName')).not.toEqual(null);
    //expect(compiled.querySelector('#inputName')).name.startsWith('name');
  }));

  it('form should have a submit button', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#submit')).not.toEqual(null);
  }));
});
