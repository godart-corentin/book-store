import {Book} from './types/book'
import {fakeBooks} from '../fakeData'

export class BookService {
  /*
   * Fetch the books prepared for the user
   */
  static getBooksForUser(): Book[] {
    // Usually, you will fetch data from an API.
    // In this case, I use fake data.
    return fakeBooks
  }

  /*
   * Fetch the popular books
   */
  static getPopularBooks(): Book[] {
    const popularBooks = [...fakeBooks]
    return popularBooks.sort(function (a, b) {
      // Sort the books by popularity using the ratings property
      return a.ratings < b.ratings ? 1 : a.ratings > b.ratings ? -1 : 0
    })
  }

  /*
   * Fetch the recents books
   */
  static getRecentBooks(): Book[] {
    return fakeBooks.sort(function (a, b) {
      // Sort the books by date using the date property
      return a.date < b.date ? -1 : a.date > b.date ? 1 : 0
    })
  }
}
