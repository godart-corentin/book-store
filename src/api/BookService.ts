import AsyncStorage from '@react-native-async-storage/async-storage'

import {Book} from './types/book'
import {myBooks} from './data'

export class BookService {
  /*
   * Fetch the books prepared for the user
   */
  static getBooksForUser(): Book[] {
    // Normally, you would fetch the data from an API
    // For this little sample project, I use a custom books array
    return myBooks
  }

  static searchBook(value: string): Book[] {
    const books = [...myBooks]
    return books.filter(b => b.title.includes(value))
  }

  /*
   * Fetch the popular books
   */
  static getPopularBooks(): Book[] {
    const popularBooks = [...myBooks]
    return popularBooks.sort(function (a, b) {
      // Sort the books by popularity using the ratings property
      return a.ratings < b.ratings ? 1 : a.ratings > b.ratings ? -1 : 0
    })
  }

  /*
   * Fetch the recents books
   */
  static getRecentBooks(): Book[] {
    return myBooks.sort(function (a, b) {
      // Sort the books by date using the date property
      return a.date < b.date ? -1 : a.date > b.date ? 1 : 0
    })
  }

  /**
   * Get the bought books
   */
  static async getBoughtBooks(): Promise<Book[]> {
    // Normally, you would fetch the data from an API
    // For this little sample project, I only use the AsyncStorage
    try {
      const value = await AsyncStorage.getItem('@bought_books')
      return value == null ? [] : JSON.parse(value)
    } catch (e) {
      console.error(e)
      return []
    }
  }

  /**
   * Get the bought books
   */
  static async updateBoughtBooks(books: Book[]): Promise<void> {
    try {
      const jsonValue = JSON.stringify(books)
      await AsyncStorage.setItem('@bought_books', jsonValue)
    } catch (e) {
      console.error(e)
    }
  }

  static async resetBoughtBooks(): Promise<void> {
    try {
      await AsyncStorage.removeItem('@bought_books')
    } catch (e) {
      console.error(e)
    }
  }
}
