import {Book} from '../api'

export type RootStackParamList = {
  Home: undefined
  Book: {
    book: Book
  }
}
