import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { AuthorComponent } from './components/author/author.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { StarRatingPipe } from './pipes/star-rating.pipe';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { ModalComponent } from './components/modal/modal.component';
import { StarPickerComponent } from './components/star-picker/star-picker.component';
import { BookDataService } from './services/book-data.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AuthorComponent,
    BookListComponent,
    StarRatingPipe,
    AuthorListComponent,
    ModalComponent,
    StarPickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'books', component: BookListComponent },
      { path: 'books/:bookId', component: BookComponent },
      { path: 'authors', component: AuthorListComponent },
      { path: 'authors/:authorId', component: AuthorComponent },
    ])
  ],
  providers: [BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
