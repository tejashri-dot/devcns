/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';
import { UshealthcareComponent } from './ushealthcare/ushealthcare.component';
import { ServicesComponent } from './services/services.component';

// Define routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'career', component: CareerComponent },
  { path: 'ushealthcare', component: UshealthcareComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  declarations: [
    //AppComponent,
    //HomeComponent,
    //AboutusComponent,
    //ContactComponent,
    //CareerComponent,
    //UshealthcareComponent,
    //ServicesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Add RouterModule here
  ],
  providers: [],
 // bootstrap: [AppComponent],
})
export class AppModule {}*/
/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';
import { ServicesComponent } from './services/services.component';
import { UshealthcareComponent } from './ushealthcare/ushealthcare.component';

// Define application routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component:AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'career', component: CareerComponent },
  { path: 'ushealthcare', component:UshealthcareComponent},
  { path: 'services', component: ServicesComponent },
];

/*@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    CareerComponent,
    UsHealthcareComponent,
    ServicesComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}*/

