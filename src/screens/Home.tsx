import React, {useEffect, useState} from 'react'
import {View} from 'react-native'

import {Book, BookService} from '../api'
import {
  BookList,
  HomeHeader,
  HorizontalBooks,
  ScreenLayout,
} from '../components'
import {useBookContext} from '../context'
import {MyTheme} from '../theme'

export const HomeScreen: React.FC<{}> = () => {
  const {openBookModal, changeSelectedBook} = useBookContext()

  const [forUserBooks, setForUserBooks] = useState<Book[]>([])
  const [popularBooks, setPopularBooks] = useState<Book[]>([])

  useEffect(() => {
    setForUserBooks(BookService.getBooksForUser())
    setPopularBooks(BookService.getPopularBooks())
  }, [])

  const onOpenModal = (book: Book) => {
    if (openBookModal) {
      openBookModal(() => {
        if (changeSelectedBook) {
          changeSelectedBook(book)
        }
      })
    }
  }
  return (
    <ScreenLayout>
      <View style={{backgroundColor: MyTheme.colors.primaryLight}}>
        <HomeHeader />
        <HorizontalBooks
          title="Pour vous"
          books={forUserBooks}
          onClick={onOpenModal}
        />
      </View>
      <BookList
        title="Ouvrages les mieux notés"
        books={popularBooks}
        onClick={onOpenModal}
        emptyMessage="Il n'y a aucun livre."
      />
    </ScreenLayout>
  )
}
