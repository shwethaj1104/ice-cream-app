import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
// import { EventEmitter } from 'stream';
import { BehaviorService } from '../service/service';

@Component({
  selector: 'app-flavours-scoops',
  templateUrl: './flavours-scoops.component.html',
  styleUrls: ['./flavours-scoops.component.css']
})
export class FlavoursScoopsComponent implements OnInit {
  @Output() flavourVal=new EventEmitter<boolean>();

  isReadOnlyVanilla:boolean=false
  isReadOnlyChocolate:boolean=false
  isReadOnlyStrawberry:boolean=false
  isReadOnlyMooseTracks:boolean=false
  isReadOnlyCookiesCream:boolean=false
  isReadOnlyMintChocolateChip:boolean=false
  isReadOnlyCookieDough:boolean=false
  forms = new FormGroup({
    Vanilla: new FormControl('', Validators.required),
    Chocolate: new FormControl('', Validators.required),
    Strawberry: new FormControl('', Validators.required),
    MooseTracks: new FormControl('', Validators.required),
    CookiesCream: new FormControl('', Validators.required),
    MintChocolateChip: new FormControl('', Validators.required),
    CookieDough: new FormControl('', Validators.required),
  });
  sum: number=0;
  error: string;
  base: any;
  constructor(private service:BehaviorService) { }

  ngOnInit(): void {
    this.service.subBase.subscribe(resp => {
      if (resp) {
        this.base = resp
        console.log("base in flavour",this.base)
      }})
      if(this.base.sugarCone){
        this.isReadOnlyCookieDough=true
      }
  }
  onInput(){
    
    this.error=""
    this.sum=0
    // console.log("keyup",this.forms.value)
    this.service.sendFlavours(this.forms.value)
    let form=this.forms.value;
    if(form.Strawberry){this.isReadOnlyMintChocolateChip=true}
    else{
      this.isReadOnlyMintChocolateChip=false
    }
    if(form.MintChocolateChip){this.isReadOnlyStrawberry=true}
    else{
      this.isReadOnlyStrawberry=false
    }
    if(form.CookiesCream && form.MooseTracks){this.isReadOnlyVanilla=true}
    else{
      this.isReadOnlyVanilla=false
    }
    if(form.CookiesCream && form.Vanilla){this.isReadOnlyMooseTracks=true}
    else{
      this.isReadOnlyMooseTracks=false
    }
    if(form.MooseTracks && form.Vanilla){this.isReadOnlyCookiesCream=true}
    else{
      this.isReadOnlyCookiesCream=false
    }
    for(let i in form){
      if(form[i]){
        if(form[i]<5 && this.sum<4){
          this.sum=this.sum+form[i]
          this.flavourVal.emit(true)
        }else{
          this.flavourVal.emit(false)
          this.sum=0
          this.error="Max of 4 scoops are allowed"
          this.forms.patchValue({
            Vanilla:'',
            Chocolate:'',
            Strawberry:'',
            MooseTracks:'',
            CookiesCream:'',
            MintChocolateChip:'',
            CookieDough:'',
          });
          this.isReadOnlyVanilla=false
          this.isReadOnlyChocolate=false
          this.isReadOnlyStrawberry=false
          this.isReadOnlyMooseTracks=false
          this.isReadOnlyCookiesCream=false
          this.isReadOnlyMintChocolateChip=false
          this.isReadOnlyCookieDough=false
        }
        
      }
    }
   
    console.log("this.sum",this.sum)
  }
}
