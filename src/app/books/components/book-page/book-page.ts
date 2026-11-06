import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BookDetail } from '../book-detail/book-detail';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-page',
  imports: [RouterLink, MatButtonModule, MatIconModule, BookDetail],
  templateUrl: './book-page.html',
  styleUrl: './book-page.css',
})
export class BookPage {
  private bookService = inject(BookService);

  readonly id = input.required<string>();

  readonly book = computed(() => this.bookService.getBookById(Number(this.id())));

  borrow(): void {
    const book = this.book();

    if (book && !this.bookService.borrowBook(book.id)) {
      alert('Knihu teraz nie je možné vypožičať.');
    }
  }

  giveBack(): void {
    const book = this.book();

    if (book) {
      this.bookService.returnBook(book.id);
    }
  }

  toggleFavorite(): void {
    const book = this.book();

    if (book) {
      this.bookService.toggleFavorite(book.id);
    }
  }
}
