import {PortalProvider} from '@gorhom/portal'
import React, {useEffect, useRef, useState} from 'react'
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  ScrollView,
  View,
} from 'react-native'
import {Modalize} from 'react-native-modalize'
import {SafeAreaView} from 'react-native-safe-area-context'

import {Book, BookService} from '../api'
import {BookList, HomeHeader, HorizontalBooks} from '../components'
import {BookBottomSheet} from '../components/BookBottomSheet'

export const HomeScreen: React.FC<{}> = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const [forUserBooks, setForUserBooks] = useState<Book[]>([])
  const [popularBooks, setPopularBooks] = useState<Book[]>([])
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  useEffect(() => {
    setForUserBooks(BookService.getBooksForUser())
    setPopularBooks(BookService.getPopularBooks())
  }, [])

  /* Bottom Sheet */
  const modalRef = useRef<Modalize>(null)

  const onOpenModal = (book: Book) => {
    setSelectedBook(book)
    modalRef.current?.open()
  }

  const onCloseModal = () => {
    setSelectedBook(null)
    modalRef.current?.close()
  }

  return (
    <PortalProvider>
      <SafeAreaView style={styles.mainView}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView style={styles.contentView} nestedScrollEnabled>
          <View style={styles.backgroundView}>
            <HomeHeader />
            <HorizontalBooks
              title="Pour vous"
              books={forUserBooks}
              onClick={onOpenModal}
            />
          </View>
          <BookList
            title="Ouvrages populaires"
            books={popularBooks}
            onClick={onOpenModal}
          />
        </ScrollView>
        <BookBottomSheet
          modalRef={modalRef}
          onClose={onCloseModal}
          book={selectedBook}
        />
      </SafeAreaView>
    </PortalProvider>
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
    marginBottom: 32,
    backgroundColor: '#EBE3DB',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
})
