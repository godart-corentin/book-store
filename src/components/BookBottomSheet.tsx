import {Portal} from 'react-native-portalize'
import React from 'react'
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native'
import {Modalize} from 'react-native-modalize'
import {Button, CloseButton} from '.'

import {Book} from '../api'
import {useBookContext} from '../context'
import {useNavigation} from '@react-navigation/core'
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {TabParamList} from '../types'

type Props = {
  book: Book | null
  modalRef: React.Ref<Modalize>
  onClose: () => void
}

const {height} = Dimensions.get('screen')
const modalHeight = height * 0.8

type BookBottomSheetProp = BottomTabNavigationProp<TabParamList, 'Mes Livres'>

export const BookBottomSheet: React.FC<Props> = ({book, modalRef, onClose}) => {
  const {addBoughtBook, isBookBought, closeBookModal} = useBookContext()
  const navigation = useNavigation<BookBottomSheetProp>()

  const onClickBuy = (bk: Book | null) => {
    if (bk) {
      addBoughtBook?.(bk)
      closeBookModal?.(() => {
        navigation.navigate('Mes Livres')
      })
    }
  }

  const isBuyButtonVisible = (bk: Book | null) => {
    if (bk) {
      return !isBookBought?.(bk)
    }
    return false
  }

  return (
    <Portal>
      <Modalize
        ref={modalRef}
        modalHeight={modalHeight}
        childrenStyle={styles.childrenStyle}
        modalStyle={styles.modalStyle}
        rootStyle={styles.rootStyle}
        HeaderComponent={<CloseButton onClick={onClose} />}>
        <View style={styles.mainInfo}>
          {book && (
            <>
              <Image style={styles.cover} source={{uri: book.cover}} />
              <Text style={styles.title}>{book.title}</Text>
              <Text style={styles.authors}>{book.authors.join(', ')}</Text>
            </>
          )}
        </View>
        <View style={styles.moreInfo}>
          {book && <Text style={styles.description}>{book.description}</Text>}
        </View>
        <View style={styles.buttonView}>
          <Button
            onPress={() => {}}
            title="Aperçu"
            containerStyle={styles.buttonContainerStyle}
            icon="search"
          />
          <Button
            onPress={() => {
              onClickBuy(book)
            }}
            title="Acheter"
            containerStyle={styles.buttonContainerStyle}
            icon="cart"
            visible={isBuyButtonVisible(book)}
          />
        </View>
      </Modalize>
    </Portal>
  )
}

const styles = StyleSheet.create({
  rootStyle: {
    zIndex: 9999,
  },
  modalStyle: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  childrenStyle: {
    backgroundColor: '#EBE3DB',
    flex: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  mainInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingVertical: 32,
  },
  cover: {
    height: 250,
    width: 163.125,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Libre Caslon Text',
    fontWeight: '400',
    color: '#2C2F3D',
    textAlign: 'center',
    fontSize: 20,
    maxWidth: 300,
    marginBottom: 8,
  },
  authors: {
    fontFamily: 'Montserrat',
    color: '#6E727D',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  moreInfo: {
    backgroundColor: '#FFF',
    marginHorizontal: 32,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  description: {
    fontFamily: 'Libre Caslon Text',
    fontWeight: '400',
    color: '#2C2F3D',
    fontSize: 14,
    textAlign: 'justify',
    lineHeight: 24,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 32,
    flex: 1,
    marginVertical: 8,
  },
  buttonContainerStyle: {
    flex: 1,
    paddingVertical: 13,
    paddingHorizontal: 26,
  },
})
