import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  items: Observable<any[]>;
  quantity = 1;
  
  increase()
  {
   this.quantity++;
  }
  decrease()
  {
    if(this.quantity != 1)
  {
   this.quantity--;
  }
  
  }
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }

  ngOnInit(): void {
  }

}
