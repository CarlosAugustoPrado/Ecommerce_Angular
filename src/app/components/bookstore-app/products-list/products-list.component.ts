import { Component, OnInit } from '@angular/core';
import { Book } from './model/book';
import { BookService } from './products-list.component.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  livros: any;
  bookService: BookService;

  constructor( bookService : BookService) { 
    this.bookService = bookService;
  }

  ngOnInit(): void {

    this.livros = this.bookService.getBook().subscribe((data => {

      this.livros = data;
      
    }))
  }

}
