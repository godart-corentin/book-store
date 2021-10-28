import React from 'react'
import {Book} from '../api'
import {BookList, ScreenLayout} from '../components'
import {useBookContext} from '../context'

export const MyBooksScreen: React.FC<{}> = () => {
  const {boughtBooks, openBookModal, changeSelectedBook} = useBookContext()

  const onOpenModal = (book: Book) => {
    openBookModal?.(() => {
      changeSelectedBook?.(book)
    })
  }

  return (
    <ScreenLayout>
      <BookList
        title="Mes Livres"
        books={boughtBooks}
        onClick={onOpenModal}
        emptyMessage="Vous ne possédez aucun livre."
      />
    </ScreenLayout>
  )
}
