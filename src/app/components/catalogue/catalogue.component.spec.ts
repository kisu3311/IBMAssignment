import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CatalogueComponent } from './catalogue.component';
import * as Actions from './../../store/actions/coffee.actions';

describe('CatalogueComponent', () => {
  let component: CatalogueComponent;
  let fixture: ComponentFixture<CatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match table row count as 10', () => {
    const tabLabels = fixture.debugElement.query(By.css('.table-group-divider'));
    let tableRows = tabLabels.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(10);
  });
});
