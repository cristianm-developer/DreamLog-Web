import { TestBed } from '@angular/core/testing';

import { DreamsDataService } from './dreams-data.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../../../../../environments/environment.development';

describe('DreamsDataService', () => {
  let service: DreamsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        
       ]
    });
    service = TestBed.inject(DreamsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
