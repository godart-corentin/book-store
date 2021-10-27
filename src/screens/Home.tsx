import React, {useEffect, useState} from 'react'
import {StyleSheet, View} from 'react-native'

import {Book, BookService} from '../api'
import {
  BookList,
  HomeHeader,
  HorizontalBooks,
  ScreenLayout,
} from '../components'
import {useBookContext} from '../context'

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
      <View style={styles.backgroundView}>
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
      />
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#F3F5F9',
  },
  contentView: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundView: {
    backgroundColor: '#EBE3DB',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
})
