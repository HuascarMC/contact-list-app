import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ContactListComponent,
    ContactCreateComponent,
    ContactDetailsComponent,
    ContactUpdateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ContactListComponent },
      { path: 'create', component: ContactCreateComponent },
      { path: 'contacts/:contactId', component: ContactDetailsComponent },
      { path: 'contacts/update/:contactId', component: ContactUpdateComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
