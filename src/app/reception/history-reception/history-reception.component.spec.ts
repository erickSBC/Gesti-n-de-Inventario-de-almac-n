import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryReceptionComponent } from './history-reception.component';

describe('HistoryReceptionComponent', () => {
  let component: HistoryReceptionComponent;
  let fixture: ComponentFixture<HistoryReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryReceptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
