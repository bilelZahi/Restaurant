import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

 burgerForm:FormGroup;
 sandwichForm:FormGroup;
 tacosForm:FormGroup;
 ingrediantsForm:FormGroup
  constructor() { }
  

  ngOnInit() {
    this. burgerForm = new FormGroup({
      nomBurger : new FormControl('', Validators.required),
      prixBurger : new FormControl('', Validators.required),
      compositions : new FormControl('', Validators.required),
    })


    this.sandwichForm=new FormGroup({
      nomSandwich : new FormControl('', Validators.required),
      prixPrincipale : new FormControl('', Validators.required),
      compositions : new FormControl('', Validators.required),

    })


    this.tacosForm = new FormGroup({
      nom : new FormControl('', Validators.required),
      prixPrincipale : new FormControl('', Validators.required),
      compositions : new FormControl('', Validators.required),

    })

    this.ingrediantsForm = new FormGroup({
      nomIngrediant : new FormControl('', Validators.required),
      prixIngrediant : new FormControl('', Validators.required),
     

      
    })
  }



}
