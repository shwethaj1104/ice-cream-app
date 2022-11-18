import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavoursScoopsComponent } from './flavours-scoops.component';

describe('FlavoursScoopsComponent', () => {
  let component: FlavoursScoopsComponent;
  let fixture: ComponentFixture<FlavoursScoopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlavoursScoopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlavoursScoopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
