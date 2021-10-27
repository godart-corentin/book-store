import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import {Modalize} from 'react-native-modalize'

import {Book, BookService} from '../api'

type BookContextType = {
  selectedBook: Book | null
  bookModalRef: React.Ref<Modalize> | null
  boughtBooks: Book[]
  changeSelectedBook?: (book: Book | null) => void
  openBookModal?: (callback: () => void) => void
  closeBookModal?: (callback: () => void) => void
  addBoughtBook?: (book: Book) => void
  isBookBought?: (book: Book) => boolean
}

const defaultState = {
  selectedBook: null,
  bookModalRef: null,
  boughtBooks: [],
}

export const BookContext = React.createContext<BookContextType>(defaultState)

export const BookProvider: React.FC = ({children}) => {
  // States & Refs
  const [selectedBook, setSelectedBook] = useState<Book | null>(
    defaultState.selectedBook,
  )
  const [boughtBooks, setBoughtBooks] = useState<Book[]>(
    defaultState.boughtBooks,
  )
  const [isInitialized, setIsInitialized] = useState(false)
  const bookModalRef = useRef<Modalize>(defaultState.bookModalRef)

  // Lifecycle
  const getBoughtBooks = async () => {
    setBoughtBooks(await BookService.getBoughtBooks())
  }

  const updateBoughtBooks = useCallback(async () => {
    await BookService.updateBoughtBooks(boughtBooks)
  }, [boughtBooks])

  useEffect(() => {
    getBoughtBooks()
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (isInitialized === true) {
      updateBoughtBooks()
    }
  }, [boughtBooks, updateBoughtBooks, isInitialized])

  /**
   * Bought books function
   */
  const addBoughtBook = async (book: Book) => {
    const newBoughtBooks = [...boughtBooks]
    newBoughtBooks.push(book)
    setBoughtBooks(newBoughtBooks)
  }

  const isBookBought = (book: Book) => {
    return boughtBooks.some(b => b.id === book.id)
  }

  /*
   * Bottom Sheet functions
   */
  const changeSelectedBook = (book: Book | null) => {
    setSelectedBook(book)
  }

  const openBookModal = (callback: () => void) => {
    bookModalRef.current?.open()
    callback()
  }

  const closeBookModal = (callback: () => void) => {
    bookModalRef.current?.close()
    callback()
  }

  return (
    <BookContext.Provider
      value={{
        selectedBook,
        changeSelectedBook,
        bookModalRef,
        openBookModal,
        closeBookModal,
        boughtBooks,
        addBoughtBook,
        isBookBought,
      }}>
      {children}
    </BookContext.Provider>
  )
}

export const useBookContext = () => useContext(BookContext)
