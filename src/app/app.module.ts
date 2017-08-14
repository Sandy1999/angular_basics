import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OurmembersComponent } from './contactus/ourmembers/ourmembers.component';
import { MemberComponent } from "./contactus/ourmembers/memberdetails.component";
import { InvoiceComponent } from './invoice/invoice.component';
import { NestedFormArray } from './invoice-new/invoice-new.component';
import { TestComponent } from "./contactus/ourmembers/test.component";


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'ourmembers', component: OurmembersComponent},
  {path: 'ourmembers/:name', component: MemberComponent},
  {path: 'invoice', component: InvoiceComponent},
  {path: 'invo', component:NestedFormArray},
  {path: 'test', component:TestComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    OurmembersComponent,
    MemberComponent,
    InvoiceComponent,
    NestedFormArray,
    TestComponent  
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule,
    FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
