import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECommerceDashboardComponent } from './dashboard/e-commerce/e-commerce-dashboard/e-commerce-dashboard.component';
import { ProductCheckoutComponent } from './dashboard/e-commerce/product-checkout/product-checkout.component';
import { ProductListComponent } from './dashboard/e-commerce/product-list/product-list.component';
import { ProductSingleComponent } from './dashboard/e-commerce/product-single/product-single.component';
import { FinanceComponent } from './dashboard/finance/finance.component';
import { SalesComponent } from './dashboard/sales/sales.component';

const routes: Routes = [
{path:'dashboard/e-commerce/home',component:ECommerceDashboardComponent},
{path:'dashboard/e-commerce/product-list',component:ProductListComponent},
{path:'dashboard/e-commerce/product-single',component:ProductSingleComponent},
{path:'dashboard/e-commerce/product-checkout',component:ProductCheckoutComponent},
{path:'dashboard/finance',component:FinanceComponent},
{path:'dashboard/sales',component:SalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
