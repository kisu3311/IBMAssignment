import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { ProductComponent } from './components/product/product.component';
import { metaReducers, reducers } from './store/reducers/core.reducers';
import { CoffeeEffects } from './store/effects/coffee.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([CoffeeEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
