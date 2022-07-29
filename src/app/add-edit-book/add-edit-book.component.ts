import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent implements OnInit {
  bookForm:FormGroup=this.formbuilder.group({});
  constructor(public formbuilder:FormBuilder,
    private bookService:BookService,
    @Inject(MAT_DIALOG_DATA) public data:{type:any,value:any}) {
   }
   
  ngOnInit(): void {
    console.log(this.data);
    this.initFormBuilder();
    if(this.data.type=="Edit"){
      this.bookForm.patchValue(this.data.value);
    }
    
  }
  initFormBuilder() {
    this.bookForm=this.formbuilder.group({
      id:[0],
      bookName:[''],
      price:['',[Validators.required]],
      category:['',[Validators.required]],
      author:['',[Validators.required]]
    })
    }
    submitData(){
     console.log("submited")
      if(this.data.type=="Add"){
        let data={
          bookName:this.bookForm.controls['bookName'].value,
          price:this.bookForm.controls['price'].value,
          category:this.bookForm.controls['category'].value,
          author:this.bookForm.controls['author'].value
        }
       this.bookService.addBook(data).subscribe(response=>{
        console.log(response);
       },(err)=>{
        console.log(err);
       })
      }else{
        this.bookService.updateBook(this.bookForm.value).subscribe(response=>{
          console.log(response);
         },(err)=>{
          console.log(err);
         })
      }
    }
}
