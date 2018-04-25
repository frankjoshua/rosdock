import { AngularFireDatabase } from 'angularfire2/database';
import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { FirebaseApp } from 'angularfire2';
import { FormBuilder } from '@angular/forms';

const mockAngularFireDataBase: any = {};

describe('DataService', () => {  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService, { provide: AngularFireDatabase, useValue: mockAngularFireDataBase }]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
