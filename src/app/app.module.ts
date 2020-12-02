import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewBooksComponent } from './view-books/view-books.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EditBooksComponent,
    AddBooksComponent,
    ViewBooksComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
