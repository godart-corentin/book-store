import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native'
import Moment from 'moment'
//import {NativeStackNavigationProp} from '@react-navigation/native-stack'
//import {useNavigation} from '@react-navigation/core'

import {Book} from '../api'
//import {RootStackParamList} from '../types'

Moment.locale()

type Props = {
  title: string
  books: Book[]
  onClick: (book: Book) => void
}

// type ProfileScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'Book'
// >

export const HorizontalBooks: React.FC<Props> = ({title, books, onClick}) => {
  //const navigation = useNavigation<ProfileScreenNavigationProp>()

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal>
        {books.map((book, index) => (
          <TouchableNativeFeedback key={index} onPress={() => onClick(book)}>
            <View style={styles.bookView}>
              <View style={styles.bookCover}>
                <Image
                  style={styles.bookCoverImage}
                  source={{uri: book.cover}}
                />
              </View>
            </View>
          </TouchableNativeFeedback>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 32,
    marginBottom: 32,
  },
  title: {
    fontFamily: 'Libre Caslon Text',
    fontWeight: '400',
    color: '#2C1810',
    fontSize: 24,
    marginBottom: 16,
  },
  bookView: {
    marginRight: 16,
  },
  bookCover: {
    borderRadius: 18,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  bookCoverImage: {
    width: 182,
    height: 275,
    borderRadius: 18,
  },
})
