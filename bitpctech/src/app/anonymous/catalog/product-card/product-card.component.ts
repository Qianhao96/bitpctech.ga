import { Component, OnInit, Input } from '@angular/core';
import { AnonymousService } from 'src/app/sharedService/anonymous.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(public anonymousService: AnonymousService) { }

  ngOnInit() {
    this.GetProductByCategoryAndBrand(this.CategoryId, this.BrandId);
  }

  @Input() CategoryId;
  @Input() BrandId;

  Loading = true;
  Products;
  GetProductByCategoryAndBrand(CategoryId, BrandId) {
    this.anonymousService.getProductsByCategoryAndBrand(CategoryId, BrandId).subscribe(
      (res: any) => {
        this.Products = res;

        //Sorting a json array
        this.Products.sort(function(a, b){
          return a.displayOrder - b.displayOrder;
        });
        this.Loading = false;
        console.log(res);

      },
      err => {
        console.log(err);
      }
    );
  }

  RemoveImageId(index, item){
    var temId = item.images.id;
    delete item.images.id;
  }
}
