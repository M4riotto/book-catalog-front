import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingEbookComponent } from './editing-ebook.component';

describe('EditingEbookComponent', () => {
  let component: EditingEbookComponent;
  let fixture: ComponentFixture<EditingEbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditingEbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditingEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
