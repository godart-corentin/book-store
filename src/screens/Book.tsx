import {RouteProp, useRoute} from '@react-navigation/core'
import React from 'react'
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Moment from 'moment'

import {GoBack} from '../components'
import {RootStackParamList} from '../types'

type BookScreenRouteProps = RouteProp<RootStackParamList, 'Book'>

Moment.locale()

export const BookScreen: React.FC<{}> = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const {
    params: {book},
  } = useRoute<BookScreenRouteProps>()

  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.contentView}>
        <GoBack />
        <View style={styles.mainInfo}>
          <Image style={styles.cover} source={{uri: book.cover}} />
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.authors}>par {book.authors.join(', ')}</Text>
        </View>
        <View style={styles.moreInfo}></View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  contentView: {
    flex: 1,
  },
  mainInfo: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    backgroundColor: '#EBE3DB',
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
    fontSize: 16,
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
    flex: 2,
  },
})
