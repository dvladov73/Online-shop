import { Component, OnInit } from '@angular/core';

import { IProduct } from '../core/product';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  id:any;
  quantity:number=1;
  isVisible:Boolean=false;
  s_price; sp:number=0;
  
  private itemsCollection: AngularFirestoreCollection<IProduct>;
  items: Observable<IProduct[]>;
  countries = ['USA', 'Germany', 'Italy', 'France','Australia', 'UK', 'Japan']
  shippings:Array<Object> =[{type:'Expedited', price:50},{type:'Standard',price:20}]
  contactForm: FormGroup;

  
  constructor(private activatedRoute: ActivatedRoute,db: AngularFirestore,private afs: AngularFirestore) { 
    this.contactForm = this.createFormGroup();
   
    this.id = this.activatedRoute.snapshot.params.id;
   // this.quantity=this.activatedRoute.snapshot.params.quantity;
   // this.items = db.collection('items').valueChanges();
   // this.order=db.collection('items', ref => ref.where('SKU', '==', 'id'));
    this.itemsCollection = afs.collection<IProduct>('items');
    this.items = this.itemsCollection.valueChanges();
  }
 
  plus(){
    this.quantity++;
  }
  minus(){
    if (this.quantity>1) {this.quantity--;}
  }  
  shipping(){
    this.isVisible=true;
  }
  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl(),
        name: new FormControl(),
        address: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        code: new FormControl(),
        country: new FormControl()
       })
     
    });
  }
  s_cost(){
   this.sp=parseInt(this.s_price.price);
    
  }
  confirm(){
    alert("This is a demo-version.");
  }
 
  onSubmit() {
  /*  const result = Object.assign({}, this.contactForm.value);
    result.personalData = Object.assign({}, result.personalData);
    result.shippings=Object.assign({},result.shippings);
    this.s_price=result.shippings.price;*/
    
  }  
  ngOnInit(): void {
   
  }

}
