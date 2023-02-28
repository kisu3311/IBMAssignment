import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Coffee } from 'src/app/models/coffee.model';
import { CoffeeActions } from 'src/app/store/actions/coffee.actions';
import { selectCoffeeDetails } from 'src/app/store/selectors/coffee.selector';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {
  productDetails: Coffee[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();

  constructor(private $store: Store,private $router: Router){
    this.dtOptions = {pageLength: 10};
    this.$store.dispatch(CoffeeActions({limit: 50}));

    this.$store.select(selectCoffeeDetails).subscribe((data)=>{
      this.productDetails = data; 
      this.dtTrigger.next(this.productDetails);
    });
  }
  
  selectedProduct(id: number){
    this.$router.navigate(["product", id]);
  }

  ngOnChanges(){}

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
