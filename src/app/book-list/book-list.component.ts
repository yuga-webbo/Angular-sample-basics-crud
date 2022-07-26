import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
export interface Book {
  bookName: string;
  price: number;
  category: string;
  author: string;
}
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
book:string="";
  constructor(private bookService:BookService) { }
  displayedColumns: string[] = ['id','bookName', 'price', 'category', 'author'];
  dataSource = [];
  ngOnInit(): void {
    this.getAllBookData();
  }
  getAllBookData(){
   this.bookService.getAllBook().subscribe(data=>{
    console.log(data)
    this.dataSource=data;
   }) 
  }
}
