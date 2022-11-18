import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { BehaviorService } from '../service/service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  @Output() baseVal = new EventEmitter<boolean>();
  isDisabled: boolean = true
  ischeck: boolean = false
  forms = new FormGroup({
    userName: new FormControl('', Validators.required),
    cup: new FormControl(false, Validators.required),
    cakeCone: new FormControl(false, Validators.required),
    sugarCone: new FormControl(false, Validators.required),
    waffleCone: new FormControl(false, Validators.required),
  });
  constructor(private service: BehaviorService) { }

  ngOnInit(): void {
  }
  selected() {
    if (this.forms.value.userName) {
      this.isDisabled = false
    } else {
      this.isDisabled = true
    }
  }
  onInput() {
    this.service.sendBase(this.forms.value)
    let form = this.forms.value
    this.isDisabled = false
    for (let i in form) {
      if (form[i] === true) {
        this.isDisabled = true
        this.baseVal.emit(true)
      }
    }
  }
  refresh() {
    this.isDisabled = false
    this.ischeck = false
    this.baseVal.emit(false)
    this.forms.patchValue({
      cup: false,
      cakeCone: false,
      sugarCone: false,
      waffleCone: false,
      userName: '',
    });
  }

}
