import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../books';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
bookList: any;
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.dataService.getAllBooks().subscribe(
      data => {
        console.log(data);
         this.bookList = data;
      },
      error => console.log(error)
    );
  }
  getBookByTitle(title: String) {
    console.log(title)
    this.dataService.getBookByTitle(title).subscribe(
      data => {
        console.log(data);
         this.bookList = data;
      },
      error => console.log(error)
    );
  }
  goToAddBookList() {
    this.router.navigate(['addBookList']);
  }
}
