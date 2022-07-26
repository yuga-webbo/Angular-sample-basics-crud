import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiURL: string;
  private serviceUrl:string="";
  constructor( private http: HttpClient) {
    this.apiURL=environment.SERVER;
   }
   getAllBook(): Observable<any> {
    this.serviceUrl = this.apiURL + "/book/GetBook";
    return this.http.get(this.serviceUrl);
  }
  addBook(books:any): Observable<any> {
    this.serviceUrl = this.apiURL + "/book/AddBook";
    return this.http.post(this.serviceUrl,books);
  }
  updateBook(books:any): Observable<any> {
    this.serviceUrl = this.apiURL + "/book/UpdateBook";
    return this.http.put(this.serviceUrl,books);
  }
  getBookById(id:any): Observable<any> {
    this.serviceUrl = this.apiURL + "/Book/GetBookById?id="+id;
    return this.http.get(this.serviceUrl);
  }
  deleteBookById(id:any): Observable<any> {
    this.serviceUrl = this.apiURL + "/Book/DeleteBook?id="+id;
    return this.http.get(this.serviceUrl);
  }
}
