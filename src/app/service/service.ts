import{Injectable} from '@angular/core'
import{ BehaviorSubject, Subject} from 'rxjs'

@Injectable({
    providedIn: 'root'
  })
export class BehaviorService{
    subBase:BehaviorSubject<any>;
    subFlavours:BehaviorSubject<any>;
    subPayment:BehaviorSubject<any>;
  
    constructor(){
        this.subBase=new BehaviorSubject<any>(null)
        this.subFlavours=new BehaviorSubject<any>(null)
        this.subPayment=new BehaviorSubject<any>(null)
    }
    sendBase(data:any){
        this.subBase.next(data);
    }
    sendFlavours(data:any){
        this.subFlavours.next(data);
    }
    sendPayment(data:any){
        this.subPayment.next(data);
    }
    
}
