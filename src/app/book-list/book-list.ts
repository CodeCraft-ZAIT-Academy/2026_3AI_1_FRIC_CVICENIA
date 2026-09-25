import { Component } from '@angular/core';
import { BookCard } from '../book-card/book-card';
import { Book } from '../book';
import { flatMap } from '../../../node_modules/rxjs/dist/types/index';

@Component({
  selector: 'app-book-list',
  imports: [BookCard],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList {
  books: Book[] = [
    {
      id: 1,
      title: 'Hobit',
      author: 'J. R. R. Tolkien',
      year: 1937,
      available: true,
      genre: 'Fantasy',
      favorite: false
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      year: 1949,
      available: false,
      genre: 'Dystopia',
      favorite: true
    },
    {
      id: 3,
      title: 'Malý princ',
      author: 'Antoine de Saint-Exupéry',
      year: 1943,
      available: true,
      genre: 'Fiction',
      favorite: false
    },
    {
      id: 4,
      title: 'Ako vycvicit draka',
      author: 'Norska zena',
      year: 1928,
      available: false,
      genre: 'Bekeho dodbrodruzsvo',
      favorite: true
    }
  ];
}