import {Portal} from 'react-native-portalize'
import React from 'react'
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native'
import {Modalize} from 'react-native-modalize'
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {useNavigation} from '@react-navigation/core'
import Moment from 'moment'
import 'moment/locale/fr'

import {Book} from '../api'
import {Button, CloseButton} from '.'
import {useBookContext} from '../context'
import {TabParamList} from '../types'
import {MyTheme} from '../theme'

type Props = {
  book: Book | null
  modalRef: React.Ref<Modalize>
  onClose: () => void
}

// Get the dimensions of the screen
const {height} = Dimensions.get('screen')
const modalHeight = height * 0.8

// Type for the navigation hook
type BookBottomSheetProp = BottomTabNavigationProp<TabParamList, 'Mes Livres'>

Moment.locale('fr')

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

  return (
    <Portal>
      <Modalize
        ref={modalRef}
        modalHeight={modalHeight}
        childrenStyle={styles.childrenStyle}
        modalStyle={styles.modalStyle}
        rootStyle={styles.rootStyle}
        HeaderComponent={<CloseButton onClick={onClose} />}>
        <View
          style={[
            styles.mainInfo,
            {backgroundColor: MyTheme.colors.primaryLight},
          ]}>
          {book && (
            <>
              <Image style={styles.cover} source={{uri: book.cover}} />
              <Text style={[styles.title, {color: MyTheme.colors.primaryDark}]}>
                {book.title}
              </Text>
              <Text style={styles.authors}>{book.authors.join(', ')}</Text>
            </>
          )}
        </View>
        <View style={styles.moreInfo}>
          <Text style={[styles.infoTitle, {color: MyTheme.colors.primaryDark}]}>
            Description
          </Text>
          {book && (
            <Text
              style={[styles.description, {color: MyTheme.colors.primaryDark}]}>
              {book.description}
            </Text>
          )}
        </View>
        <View style={styles.moreInfo}>
          <Text style={[styles.infoTitle, {color: MyTheme.colors.primaryDark}]}>
            Informations supplémentaires
          </Text>
          {book && (
            <>
              <Text
                style={[
                  styles.description,
                  {color: MyTheme.colors.primaryDark},
                ]}>
                ISBN: {book.isbn}
              </Text>
              <Text
                style={[
                  styles.description,
                  {color: MyTheme.colors.primaryDark},
                ]}>
                Date de publication:{' '}
                {Moment(book.date).format('[le] D MMMM YYYY')}
              </Text>
            </>
          )}
        </View>
        <View style={styles.buttonView}>
          <Button
            onPress={() => {}}
            title="Lire"
            containerStyle={styles.buttonContainerStyle}
            icon="book"
            visible={book ? isBookBought?.(book) : false}
          />
          <Button
            onPress={() => {}}
            title="Ecouter"
            containerStyle={styles.buttonContainerStyle}
            icon="headset"
            visible={book ? isBookBought?.(book) : false}
          />
          <Button
            onPress={() => {
              onClickBuy(book)
            }}
            title="Ajouter à mes livres"
            containerStyle={styles.buttonContainerStyle}
            icon="add"
            visible={book ? !isBookBought?.(book) : false}
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
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  mainInfo: {
    justifyContent: 'flex-end',
    paddingVertical: 32,
    position: 'relative',
    height: 250,
    paddingHorizontal: 32,
    marginBottom: 32,
  },
  cover: {
    height: 250,
    width: 163.125,
    resizeMode: 'contain',
    marginBottom: 16,
    position: 'absolute',
    right: 16,
    bottom: -75,
  },
  title: {
    fontFamily: 'Libre Caslon Text',
    fontWeight: '400',
    fontSize: 20,
    maxWidth: '50%',
    marginBottom: 8,
  },
  authors: {
    fontFamily: 'Montserrat',
    color: '#6E727D',
    fontSize: 14,
    fontWeight: '500',
    maxWidth: '50%',
  },
  moreInfo: {
    marginHorizontal: 32,
    paddingVertical: 16,
  },
  infoTitle: {
    fontFamily: 'Libre Caslon Text',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 16,
  },
  description: {
    fontFamily: 'Libre Caslon Text',
    fontWeight: '400',
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
