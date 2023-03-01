import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogueComponent } from './catalogue.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './../../store/reducers/core.reducers';
import { CoffeeEffects } from './../../store/effects/coffee.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

describe('CatalogueComponent', () => {
  let component: CatalogueComponent;
  let fixture: ComponentFixture<CatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        DataTablesModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        EffectsModule.forRoot([CoffeeEffects]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check content of first th with #', () => {
    let felement = fixture.debugElement.nativeElement;
    expect(felement.querySelector('th').textContent).toContain('#');
    fixture.detectChanges();
  });
  it('should check content of tag with id#blend', () => {
    const ele = fixture.debugElement.nativeElement;
    expect(ele.querySelector('#blend').textContent).toContain('Blend Name');
    fixture.detectChanges();
  });
});
