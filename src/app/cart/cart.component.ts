import { Component, OnInit } from '@angular/core';

import { IProduct } from '../core/product';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id:any;
  quantity:number;
  p:number=0;
  private itemsCollection: AngularFirestoreCollection<IProduct>;
  items: Observable<IProduct[]>;
 
  constructor(private activatedRoute: ActivatedRoute,db: AngularFirestore,private afs: AngularFirestore) { 
    this.id = this.activatedRoute.snapshot.params.id;
   // this.quantity=this.activatedRoute.snapshot.params.quantity;
   // this.items = db.collection('items').valueChanges();
   // this.order=db.collection('items', ref => ref.where('SKU', '==', 'id'));
    this.itemsCollection = afs.collection<IProduct>('items');
    this.items = this.itemsCollection.valueChanges();
  
    
  }

  ngOnInit(): void {
   
  }

}
