import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAuthor } from "../../data-types";
import { BookDataService, Author } from 'src/app/services/book-data.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  author : Author | undefined;

  constructor(private route: ActivatedRoute, private bookDataService : BookDataService) { }

  ngOnInit() : void {
    const { paramMap } = this.route.snapshot;
    this.author = this.bookDataService.getAuthor(
      Number(paramMap.get('authorId'))
    );
  }

}
