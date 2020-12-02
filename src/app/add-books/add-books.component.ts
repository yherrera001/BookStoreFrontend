import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../books'
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
// book = new Book();
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

}
