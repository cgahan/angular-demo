import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { BookDataService, Author, Book } from 'src/app/services/book-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  @Input() allowModal: boolean = true;
  @Input() books!: Book[];
  authors!: Author[];

  private booksSub! : Subscription;
  private authorsSub! : Subscription;

  constructor(private bookDataService : BookDataService) { }

  addBook(book : any) : void {
    if (!book) return;
    this.bookDataService.addBook(book);
  }

  ngOnInit(): void {
    if (!this.books) this.booksSub = this.bookDataService.getBooks().subscribe(books => {
      (this.books = books).sort((a, b) => a.title.localeCompare(b.title));
    });
    this.authorsSub = this.bookDataService.getAuthors().subscribe(authors =>
      (this.authors = authors).sort((a, b) => a.toString().localeCompare(b.toString()))
    );
  }

  ngOnDestroy(): void {
    this.booksSub?.unsubscribe();
    this.authorsSub.unsubscribe();
  }
}