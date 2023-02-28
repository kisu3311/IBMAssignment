import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Coffee } from 'src/app/models/coffee.model';
import { selectCoffeeDetails } from 'src/app/store/selectors/coffee.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  productDetails: Coffee[] = [];
  product: Coffee | undefined = undefined;

  constructor(private $store: Store, private $activeRoute: ActivatedRoute, private $router: Router) {
    this.$store.select(selectCoffeeDetails).subscribe((data)=>{
      this.productDetails = data; 
    }); 
  }

  ngOnInit(): void {
    const id = Number(this.$activeRoute.snapshot.paramMap.get('id'));
    this.product = this.productDetails.find((data)=> data.id == id)

    if (this.product == undefined){
      this.$router.navigate(['']);
    }
  }

  ngOnDestroy(){
    this.$store.complete();
  }
}
