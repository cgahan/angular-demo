import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from 'src/app/services/book-data.service';

import { IBook } from "../../data-types";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book : IBook | undefined;

  constructor(private route: ActivatedRoute, private bookDataService : BookDataService) { }

  ngOnInit() : void {
    const { paramMap } = this.route.snapshot;
    this.book = this.bookDataService.getBook(
      Number(paramMap.get('bookId'))
    );
  }

}
