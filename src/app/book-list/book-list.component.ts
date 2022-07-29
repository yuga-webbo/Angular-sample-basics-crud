import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddEditBookComponent } from '../add-edit-book/add-edit-book.component';
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
  constructor(private bookService:BookService,public dialog: MatDialog) { }
  displayedColumns: string[] = ['id','bookName', 'price', 'category', 'author','action'];
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
  EditBook(bookData:any,type:string){
console.log(bookData,type);
this.dialog.open(AddEditBookComponent, {
  data: {
   type:"Edit",
   value:bookData
  },
});
  }
  DeleteBook(id:any){
    this.bookService.deleteBookById(id).subscribe(response=>{
      console.log(response)
    },err=>{
      console.log(err)
    })
  }
  openDialog(){
   
      this.dialog.open(AddEditBookComponent, {
        data: {
         type:"Add",
         value:{}
        },
      });
  }
}
