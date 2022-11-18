import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { BehaviorService } from '../service/service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Output() paymentVal = new EventEmitter<boolean>();

  forms = new FormGroup({
    amount: new FormControl(0, Validators.required),
  });
  base: any;
  flavoursAndScoops: any;
  baseCost: any = {
    cup: 3,
    cakeCone: 3,
    sugarCone: 3,
    waffleCone: 4,
  };
  selectedBase: any;
  FinalBaseCost: any;
  numberOfScoops: number = 0;
  totalScoopsAmount: number = 0;
  constructor(private service: BehaviorService) { }

  ngOnInit(): void {
    this.service.subBase.subscribe(resp => {
      if (resp) {
        this.base = resp
      }
    })
    this.service.subFlavours.subscribe(resp => {
      if (resp) {
        this.flavoursAndScoops = resp
      }
    })

    for (let i in this.base) {
      if (this.base[i] === true) { this.selectedBase = i }
    }
    for (let i in this.baseCost) {
      if (i === this.selectedBase) {
        this.FinalBaseCost = this.baseCost[i]
      }
    }
    for (let i in this.flavoursAndScoops) {
      if (this.flavoursAndScoops[i] >= 1) {
        this.numberOfScoops = this.numberOfScoops + this.flavoursAndScoops[i]
        if (this.numberOfScoops === 1) {
          this.totalScoopsAmount = 2
        } else if (this.numberOfScoops === 2) {
          this.totalScoopsAmount = 3
        } else if (this.numberOfScoops === 3) {
          this.totalScoopsAmount = 3.50
        } else if (this.numberOfScoops === 4) {
          this.totalScoopsAmount = 3.80
        }
      }
    }
    this.forms.patchValue({
      amount: this.totalScoopsAmount + this.FinalBaseCost
    });

  }
  onPayment() {
    alert("Payment of " + this.forms.value.amount + " done successfully!");
    this.paymentVal.emit(true)
    this.forms.patchValue({
      amount: 0,
    });
  }
  onCancel() {
    this.forms.patchValue({
      amount: 0,
    });
    this.paymentVal.emit(true)
  }


}
