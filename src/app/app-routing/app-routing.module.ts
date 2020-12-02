import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBooksComponent } from '../add-books/add-books.component';
import { EditBooksComponent } from '../edit-books/edit-books.component';
import { ViewBooksComponent } from '../view-books/view-books.component';



// Routing
const routes: Routes = [
  {path: '', component: ViewBooksComponent},
  {path: 'viewbooks', component: ViewBooksComponent},
  {path: 'addBooks', component: AddBooksComponent },
  {path: 'editBooks', component: EditBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
