import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  id:any;
  prod:any;
  products:any[];
  items: Observable<any[]>;
  constructor(private activatedRoute: ActivatedRoute,db: AngularFirestore) { 
    this.id = this.activatedRoute.snapshot.params.id;
    this.items = db.collection('items').valueChanges();
  
  }
  quantity=1;
  plus(){
    this.quantity++;
    
  }
  minus(){
    if (this.quantity>1) {this.quantity--;}
   
  }   

  ngOnInit(): void { }
}
