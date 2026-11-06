
import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { Book } from '../../../books/book';
import { BookService } from '../../../books/book.service';
import { BookForm } from '../../../books/components/book-form/book-form';

@Component({
  selector: 'app-admin-book-edit',
  imports: [BookForm, RouterLink, MatButtonModule],
  templateUrl: './admin-book-edit.html',
  styleUrl: './admin-book-edit.css',
})
export class AdminBookEdit {
  private bookService = inject(BookService);
  private router = inject(Router);

  // Ak id neexistuje, pridávame novú knihu.
  readonly id = input<string | undefined>();

  // Podľa ID vyhľadáme knihu v BookService.
  readonly book = computed(() => {
    const id = this.id();

    if (id === undefined) {
      return undefined;
    }

    return this.bookService.getBookById(Number(id));
  });

  save(book: Book): void {
    if (this.id() === undefined) {
      // Nová kniha
      this.bookService.addBook(book);
    } else {
      // Úprava existujúcej knihy
      this.bookService.updateBook(book);
    }

    this.router.navigate(['/admin']);
  }

  cancel(): void {
    this.router.navigate(['/admin']);
  }
}
