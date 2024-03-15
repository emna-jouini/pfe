import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdateClientComponent } from './addupdate-client.component';

describe('AddupdateClientComponent', () => {
  let component: AddupdateClientComponent;
  let fixture: ComponentFixture<AddupdateClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddupdateClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddupdateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
