import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GiveMeHelp } from './give-me-help';

describe('GiveMeHelp', () => {
  let component: GiveMeHelp;
  let fixture: ComponentFixture<GiveMeHelp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiveMeHelp],
    }).compileComponents();

    fixture = TestBed.createComponent(GiveMeHelp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
