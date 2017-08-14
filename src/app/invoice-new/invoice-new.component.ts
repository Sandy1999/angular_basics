import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import  "rxjs/add/operator/retry";
@Component({
  selector: 'example-app',
  templateUrl:'./invoice-new.component.html',
  styleUrls:['./invoice-new.component.css'],
})
export class NestedFormArray {
  form = new FormGroup({
    cities: new FormArray([
      new FormControl(''),
    ]),
    state: new FormArray([
      new FormControl('')
    ]),
    total: new FormArray([
      new FormControl('')
    ])
  });

  get cities(): FormArray { return this.form.get('cities') as FormArray; }
  get states(): FormArray { return this.form.get('state') as FormArray;}
  get totals(): FormArray { return this.form.get('total') as FormArray}
  addCity() { this.cities.push(new FormControl('')); this.states.push( new FormControl('')); 
    this.totals.push(new FormControl(''))
  }

  onSubmit() {
    console.log(this.form.value);    // { cities: ['SF', 'NY'] }
  }

  product={
    price:"", quantity:""
  }

  // setPreset() { this.cities.patchValue(['']); }
}