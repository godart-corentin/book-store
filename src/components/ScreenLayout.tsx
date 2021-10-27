import React from 'react'
import {StatusBar, StyleSheet, useColorScheme, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {BookBottomSheet} from '../components/BookBottomSheet'
import {useBookContext} from '../context'

export const ScreenLayout: React.FC<{}> = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark'
  const {selectedBook, bookModalRef, closeBookModal, changeSelectedBook} =
    useBookContext()

  const onCloseModal = () => {
    if (closeBookModal) {
      closeBookModal(() => {
        if (changeSelectedBook) {
          changeSelectedBook(null)
        }
      })
    }
  }

  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView style={styles.contentView} nestedScrollEnabled>
        {children}
      </ScrollView>
      <BookBottomSheet
        modalRef={bookModalRef}
        onClose={onCloseModal}
        book={selectedBook}
      />
    </SafeAreaView>
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
  backgroundView: {
    marginBottom: 32,
    backgroundColor: '#EBE3DB',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
})
