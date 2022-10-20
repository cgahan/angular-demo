import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IAuthor, IBook } from '../data-types';
import { AUTHORS, BOOKS } from './data-mock';


export class Book implements IBook {
  id;
  image?;
  title;
  authorId;
  description?;
  datePublished;
  rating?;

  static nextId = 0;

  constructor(data : any) {
    const {id, image, title, authorId, description, datePublished, rating} = data;
    this.id = Number(id) || Book.nextId++;
    this.image = image;
    this.title = title;
    this.authorId = Number(authorId);
    this.description = description;
    this.datePublished = datePublished;
    this.rating = Number(rating);
  }

  toString() {
    return this.title;
  }

  get author() {
    return authors.find((x) => x.id === this.authorId);
  }
}

export class Author implements IAuthor {
  givenName;
  familyName;
  id;

  static nextId = 0;

  constructor(data : any) {
    const {id, givenName, familyName} = data;
    this.id = Number(id) || Author.nextId++;
    this.givenName = givenName;
    this.familyName = familyName;
  }

  toString() {
    return this.familyName.toUpperCase() + ', ' + this.givenName;
  }

  get books() {
    return books.filter((x) => this.id === x.authorId);
  }
}

const authors = AUTHORS.map(x => new Author(x)),
books = BOOKS.map(x => new Book(x));

const authorsSub = new BehaviorSubject<Author[]>(authors), booksSub = new BehaviorSubject<Book[]>(books);

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor() { }

  getAuthors() : Observable<Author[]> {
    // return of(authors);
    return authorsSub;
  }
  getAuthor(authorId : number) : Author | undefined {
    return authors.find(({id}) => id === authorId);
  }

  getBooks(): Observable<Book[]> {
    // return of(books);
    return booksSub;
  }
  getBook(bookId : number) : Book | undefined {
    return books.find(({id}) => id === bookId);
  }
  addBook(book : Object) : void {
    books.push(new Book(book));
    booksSub.next(books);
  }
}
