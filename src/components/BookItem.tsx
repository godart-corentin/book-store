import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Moment from 'moment'
//import {NativeStackNavigationProp} from '@react-navigation/native-stack'

import {Book} from '../api'
//import {RootStackParamList} from '../types'
//import {useNavigation} from '@react-navigation/core'

type Props = {
  book: Book
  onClick: (book: Book) => void
}

Moment.locale()

// type BookItemNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'Book'
// >

export const BookItem: React.FC<Props> = ({book, onClick}): JSX.Element => {
  //const navigation = useNavigation<BookItemNavigationProp>()

  return (
    <View key={book.id} style={styles.wrapper}>
      <TouchableNativeFeedback onPress={() => onClick(book)}>
        <Image style={styles.bookCover} source={{uri: book.cover}} />
      </TouchableNativeFeedback>
      <View style={styles.mainInfo}>
        <TouchableNativeFeedback onPress={() => onClick(book)}>
          <Text style={styles.bookTitle} numberOfLines={1} ellipsizeMode="tail">
            {book.title}
          </Text>
        </TouchableNativeFeedback>

        <Text style={styles.bookAuthors}>{book.authors[0]}</Text>
        <View style={styles.ratingsView}>
          <Icon name="star" style={styles.ratingsIcon} size={14} />

          <Text style={styles.bookRatings}>
            {Number(book.ratings).toFixed(1)}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  leftSide: {
    flexDirection: 'row',
  },
  bookCover: {
    width: 85,
    height: 125,
  },
  mainInfo: {
    marginLeft: 8,
    flex: 3,
    height: 100,
    justifyContent: 'center',
  },
  bookTitle: {
    fontFamily: 'Libre Caslon Text',
    fontWeight: '400',
    color: '#2C1810',
  },
  bookAuthors: {
    fontFamily: 'Montserrat',
    color: '#A5A8B0',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 6,
  },
  ratingsView: {
    marginTop: 16,
    flexDirection: 'row',
  },
  ratingsIcon: {
    color: '#DAAA63',
    marginRight: 4,
  },
  bookRatings: {
    fontFamily: 'Montserrat',
    color: '#2C2F3D',
    fontWeight: '600',
    fontSize: 12,
  },
  rightInfo: {
    flex: 1,
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
})
