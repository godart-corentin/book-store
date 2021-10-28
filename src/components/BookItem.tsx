import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import {Book} from '../api'
import {MyTheme} from '../theme'

type Props = {
  book: Book
  onClick: (book: Book) => void
}

export const BookItem: React.FC<Props> = ({book, onClick}): JSX.Element => {
  return (
    <TouchableNativeFeedback key={book.id} onPress={() => onClick(book)}>
      <View style={styles.wrapper}>
        <Image style={styles.bookCover} source={{uri: book.cover}} />
        <View style={styles.mainInfo}>
          <Text
            style={[styles.bookTitle, {color: MyTheme.colors.primaryDark}]}
            numberOfLines={1}
            ellipsizeMode="tail">
            {book.title}
          </Text>

          <Text style={styles.bookAuthors}>{book.authors[0]}</Text>
          <View style={styles.ratingsView}>
            <Icon
              name="star"
              style={[styles.ratingsIcon, {color: MyTheme.colors.primary}]}
              size={14}
            />

            <Text style={styles.bookRatings}>
              {Number(book.ratings).toFixed(1)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
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
