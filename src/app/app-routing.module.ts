import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { FlavoursScoopsComponent } from './flavours-scoops/flavours-scoops.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'base', component: BaseComponent, data: { label: 'base' } },
  { path: 'flavours-Scoops', component: FlavoursScoopsComponent, data: { label: 'flavours-Scoops' } },
  { path: 'payment', component: PaymentComponent, data: { label: 'payment' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
