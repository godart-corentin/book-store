import {Portal} from 'react-native-portalize'
import React from 'react'
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native'
import {Modalize} from 'react-native-modalize'
import {CloseButton} from '.'

import {Book} from '../api'

type Props = {
  book: Book | null
  modalRef: React.Ref<Modalize>
  onClose: () => void
}

const {height} = Dimensions.get('screen')
const modalHeight = height * 0.8

export const BookBottomSheet: React.FC<Props> = ({book, modalRef, onClose}) => {
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
})
