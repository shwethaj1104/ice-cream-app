import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  base: boolean = true
  payment: boolean = false
  flavoursScoops: boolean = false
  baseBtn: boolean = false;
  flavourBtn: boolean = true;
  paymentBtn: boolean = true;


  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  onBase() {
    this.flavoursScoops = false
    this.base = true
    this.payment = false
  }
  onFlavours() {
    this.payment = false
    this.flavoursScoops = true
    this.base = false
    this.baseBtn = true;
    this.flavourBtn = false;
    this.paymentBtn = true;
  }
  onPayment() {
    this.payment = true
    this.flavoursScoops = false
    this.base = false
    this.baseBtn = true;
    this.flavourBtn = true;
    this.paymentBtn = false;
  }
  baseVal(baseBtnValue: boolean) {
    if (baseBtnValue) {
      this.flavourBtn = false;
      this.baseBtn = true;
    } else {
      this.flavourBtn = true;
      this.baseBtn = false;
    }
  }
  flavourVal(flavourBtnValue: boolean) {
    if (flavourBtnValue) {
      this.flavourBtn = true;
      this.paymentBtn = false;
    } else {
      this.flavourBtn = false;
      this.paymentBtn = true;
    }
  }
  paymentVal(paymentBtnValue: boolean) {
    if (paymentBtnValue) {
      this.flavourBtn = true;
      this.baseBtn = false;
      this.paymentBtn = true;
    } else {
      this.flavourBtn = true;
      this.baseBtn = true;
      this.paymentBtn = false;
    }
  }

}
