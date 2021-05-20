import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


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
  constructor(public snackBar: MatSnackBar , public router:Router , private productService : ProductsService) { }
  
  // files: File[] = [];

  // onSelect(event) {
  //   console.log(event);
  //   this.files.push(...event.addedFiles);
  // }
  
  // onRemove(event) {
  //   console.log(event);
  //   this.files.splice(this.files.indexOf(event), 1);
  // }

  ngOnInit() {

    this.burgerForm = new FormGroup({
      nom : new FormControl('', Validators.required),
      prixPrincipale : new FormControl('', Validators.required),
      compositions : new FormControl('', Validators.required),
      imageBurger : new FormControl('', Validators.required)
    })


    this.sandwichForm=new FormGroup({
      nom : new FormControl('', Validators.required),
      prixPrincipale : new FormControl('', Validators.required),
      compositions : new FormControl('', Validators.required),
      imageSandwich : new FormControl('', Validators.required)


    })


    this.tacosForm = new FormGroup({
      nom : new FormControl('', Validators.required),
      prixPrincipale : new FormControl('', Validators.required),
      compositions : new FormControl('', Validators.required),
      imageTacos : new FormControl('', Validators.required)


    })

    this.ingrediantsForm = new FormGroup({
      nomIngrediant : new FormControl('', Validators.required),
      prixIngrediant : new FormControl('', Validators.required),
      imageIngrediant : new FormControl('', Validators.required)

     

      
    })

    
  }

  addTacos(){

          
      this.productService.addTacos(this.tacosForm.value).subscribe((res)=>{

        if (this.tacosForm.valid) {

          this.snackBar.open('tacos ajouter!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })
          this.tacosForm.reset()
        }

      else{

          this.snackBar.open('remplir le formulaire', '×', { panelClass: 'close', verticalPosition: 'top', duration: 3000 })

          }
        })
      }


    //////////////////////////////////////////////////////////////////////////////

    addBurger(){

            
        this.productService.addBurger(this.burgerForm.value).subscribe((res)=>{
  
          if (this.burgerForm.valid) {
  
            this.snackBar.open('burger ajouter!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })
            this.burgerForm.reset()
          }
  
        else{
  
            this.snackBar.open('remplir le formulaire', '×', { panelClass: 'close', verticalPosition: 'top', duration: 3000 })
  
            }
          })
      }

      ////////////////////////////////////////////////////////////////////////

      addSandwich(){

              
          this.productService.addSandwich(this.sandwichForm.value).subscribe((res)=>{
    
            if (this.sandwichForm.valid) {
    
              this.snackBar.open('sandwich ajouter!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })
              this.sandwichForm.reset()
            }
    
          else{
    
              this.snackBar.open('remplir le formulaire', '×', { panelClass: 'close', verticalPosition: 'top', duration: 3000 })
    
              }
            })
        }

        ///////////////////////////////////////////////////////////////

        addIngrediant(){

                
            this.productService.addIngrediant(this.ingrediantsForm.value).subscribe((res)=>{
      
              if (this.ingrediantsForm.valid) {
      
                this.snackBar.open('ingrediant ajouter!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })
                this.ingrediantsForm.reset()
              }
      
            else{
      
                this.snackBar.open('remplir le formulaire', '×', { panelClass: 'close', verticalPosition: 'top', duration: 3000 })
      
                }
              })
          }

  // addBurger(){
  //   if(this.burgerForm.valid){     
       
  //     this.snackBar.open('burger ajouter!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })
  //           this.burgerForm.reset();

  //   }
  //   else{
  //     this.snackBar.open('remplir le formulaire', '×', { panelClass: 'close', verticalPosition: 'top', duration: 3000 })
  //     // this.router.navigateByUrl('/')

  //   }
  // }

  // addSandwich(){
  //   if(this.sandwichForm.valid){     
       
  //     this.snackBar.open('sandwich ajouter!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })

  //   }
  //   else{
  //     this.snackBar.open('remplir le formulaire', '×', { panelClass: 'close', verticalPosition: 'top', duration: 3000 })
  //     // this.router.navigateByUrl('/')

  //   }
  // }

  // addIngrediant(){
  //   if(this.ingrediantsForm.valid){     
       
  //     this.snackBar.open('ingrediant ajouter!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })

  //   }
  //   else{
  //     this.snackBar.open('remplir le formulaire', '×', { panelClass: 'close', verticalPosition: 'top', duration: 3000 })
  //     // this.router.navigateByUrl('/')

  //   }
  // }
 




}
