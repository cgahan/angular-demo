import { Component, OnDestroy, OnInit } from '@angular/core';

import { IAuthor } from "../../data-types";
import { BookDataService } from 'src/app/services/book-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit, OnDestroy {

  authors! : IAuthor[];

  private authorsSub! : Subscription;

  constructor(private bookDataService : BookDataService) { }

  ngOnInit() : void {
    this.authorsSub = this.bookDataService.getAuthors().subscribe(authors => this.authors = authors.sort())
  }

  ngOnDestroy() : void {
    this.authorsSub.unsubscribe();
  }

}
