import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'

import {Book, BookService} from '../api'
import {BookList, ScreenLayout, SearchBar} from '../components'
import {useBookContext} from '../context'

export const SearchScreen: React.FC<{}> = () => {
  const {openBookModal, changeSelectedBook} = useBookContext()
  const [books, setBooks] = useState<Book[]>([])

  const onOpenModal = (book: Book) => {
    openBookModal?.(() => {
      changeSelectedBook?.(book)
    })
  }

  const onChange = async (value: string) => {
    setBooks(await BookService.searchBook(value))
  }

  return (
    <ScreenLayout>
      <View style={styles.searchView}>
        <SearchBar onChange={onChange} />
      </View>
      <BookList
        title="Résultat de la recherche"
        books={books}
        onClick={onOpenModal}
        emptyMessage="Aucun livre ne correspond à la recherche."
      />
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  searchView: {
    paddingHorizontal: 32,
    marginTop: 16,
  },
})
