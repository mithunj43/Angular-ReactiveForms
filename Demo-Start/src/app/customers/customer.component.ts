import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required, Validators.maxLength(50)]],
      email: ['',[Validators.required,Validators.email]],
      sendCatalog: true
    });
  }

  save(): void {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  // populateTestData(): void {
  //   this.customerForm.setValue({
  //     firstName: 'Pooja',
  //     lastName: 'Mithun',
  //     email: 'pooja@gmail.com',
  //     sendCatalog: false
  //   })
  // }

  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Pooja',
      lastName: 'Mithun',
      sendCatalog: false
    })
  }
}
