import React from 'react'
import {SafeAreaView, StyleSheet, Text} from 'react-native'

import {Book} from '../api'
import {BookItem} from './BookItem'

type Props = {
  title: string
  books: Book[]
  onClick: (book: Book) => void
}

export const BookList: React.FC<Props> = ({title, books, onClick}) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      {books.map(book => (
        <BookItem key={book.id} book={book} onClick={onClick} />
      ))}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 32,
  },
  title: {
    fontFamily: 'Libre Caslon Text',
    fontWeight: '400',
    color: '#2C1810',
    fontSize: 18,
    marginBottom: 16,
  },
})
