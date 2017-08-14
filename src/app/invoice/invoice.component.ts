import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from "@angular/forms";
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  constructor() {
   }

   invoiceform = new FormGroup({
     price: new FormArray([
      new FormControl('')
     ]),
     quantity: new FormArray([
       new FormControl('')
     ]),
     total: new FormArray([
       new FormControl('')
     ])
   })

   get prices(): FormArray{ return this.invoiceform.get('price') as FormArray}
   get quantities(): FormArray{ return this.invoiceform.get('quantity') as FormArray}
   get totalamount(): FormArray{ return this.invoiceform.get('total') as FormArray}
   invoiceSubmit(){
   var invoicedetails = this.invoiceform.value
   console.log(invoicedetails)  
   }
   addItem(){
     this.prices.push(new FormControl(''))
     this.quantities.push(new FormControl(''))
     this.totalamount.push(new FormControl(''))
   }
  ngOnInit() {
  }
  product = {
    number1:"", number2:""
  }
}
