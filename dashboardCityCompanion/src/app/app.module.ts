import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ECommerceDashboardComponent } from './dashboard/e-commerce/e-commerce-dashboard/e-commerce-dashboard.component';
import { ProductListComponent } from './dashboard/e-commerce/product-list/product-list.component';
import { ProductSingleComponent } from './dashboard/e-commerce/product-single/product-single.component';
import { ProductCheckoutComponent } from './dashboard/e-commerce/product-checkout/product-checkout.component';
import { FinanceComponent } from './dashboard/finance/finance.component';
import { SalesComponent } from './dashboard/sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    FooterComponent,
    ECommerceDashboardComponent,
    ProductListComponent,
    ProductSingleComponent,
    ProductCheckoutComponent,
    FinanceComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
