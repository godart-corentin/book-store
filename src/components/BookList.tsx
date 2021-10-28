import React from 'react'
import {SafeAreaView, StyleSheet, Text} from 'react-native'

import {Book} from '../api'
import {MyTheme} from '../theme'
import {BookItem} from './BookItem'

type Props = {
  title: string
  books: Book[]
  onClick: (book: Book) => void
  emptyMessage: string
}

export const BookList: React.FC<Props> = ({
  title,
  books,
  onClick,
  emptyMessage,
}) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={[styles.title, {color: MyTheme.colors.primaryDark}]}>
        {title}
      </Text>
      {books.map(book => (
        <BookItem key={book.id} book={book} onClick={onClick} />
      ))}
      {books.length === 0 && (
        <Text style={[styles.noBook, {color: MyTheme.colors.primaryDark}]}>
          {emptyMessage}
        </Text>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 32,
    marginVertical: 32,
  },
  title: {
    fontFamily: 'Libre Caslon Text',
    fontWeight: '400',
    fontSize: 20,
    marginBottom: 16,
  },
  noBook: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
  },
})
