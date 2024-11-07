import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEbookComponent } from './details-ebook.component';

describe('DetailsEbookComponent', () => {
  let component: DetailsEbookComponent;
  let fixture: ComponentFixture<DetailsEbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsEbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
