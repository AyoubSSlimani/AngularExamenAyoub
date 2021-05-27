import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatistiqueComponent } from './list-statistique.component';

describe('ListStatistiqueComponent', () => {
  let component: ListStatistiqueComponent;
  let fixture: ComponentFixture<ListStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStatistiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
