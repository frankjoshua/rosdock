import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeblockListComponent } from './codeblock-list.component';

describe('CodeblockListComponent', () => {
  let component: CodeblockListComponent;
  let fixture: ComponentFixture<CodeblockListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeblockListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeblockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
