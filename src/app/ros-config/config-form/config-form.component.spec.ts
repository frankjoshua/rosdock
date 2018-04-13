import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFormComponent } from './config-form.component';

describe('ConfigFormComponent', () => {
  let component: ConfigFormComponent;
  let fixture: ComponentFixture<ConfigFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form', async(() => {
    const fixture = TestBed.createComponent(ConfigFormComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).not.toEqual(null);
  }));

  it('form should have a name input', async(() => {
    const fixture = TestBed.createComponent(ConfigFormComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#inputName')).not.toEqual(null);
    //expect(compiled.querySelector('#inputName')).name.startsWith('name');
  }));
});
