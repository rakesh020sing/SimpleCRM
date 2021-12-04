import { ProfileModule } from './profile/profile.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { ListContactComponent } from './contacts/list-contact/list-contact.component';
import { DeleteContactComponent } from './contacts/delete-contact/delete-contact.component';
@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    EditContactComponent,
    ListContactComponent,
    DeleteContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
