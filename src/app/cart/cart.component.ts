import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items: any;
  modalRef: any = BsModalRef;
  check: any;
  constructor(private activatedRoute: ActivatedRoute, private modalService: BsModalService, private fb: FormBuilder, private acceptService: CartService) {

    // Get the query string value from our route
    const myArray: any = this.activatedRoute.snapshot.queryParamMap.get('myArray');
    console.log(JSON.parse(myArray));
    this.items = JSON.parse(myArray)
  }
  ngOnInit(): void {

  }

  profileForm = this.fb.group({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mob: new FormControl('', Validators.required),


  });

  openModalWithClass(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );

  }

  submit(data: any) {
    this.check = data
    this.acceptService.checkout(data, this.items).subscribe((res: any) => {
      console.log(res)
    })
  }

}
