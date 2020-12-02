import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/books`);
  }

  addBook(books: Books) {
      return this.http.post(`http://localhost:8080/books`, books);
  }

  updateBook(books: Books){
      return this.http.put('http://localhost:8080/books/{bookId}', books)
  }

  deleteBookById(id: number){
    return this.http.delete('http://localhost:8080/books/{bookId}')
  }

  getBookByTitle(title: String){
    return this.http.get<any>(`http://localhost:8080/books/title?title=${title}`);
  }

}
