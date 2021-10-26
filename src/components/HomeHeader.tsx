import React, {useEffect, useState} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {User, UserService} from '../api'

export const HomeHeader: React.FC<{}> = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    setUser(UserService.getCurrentUser())
  }, [])

  return (
    <View style={styles.wrapper}>
      <View style={styles.welcomeUser}>
        {user && (
          <>
            <Image style={styles.userPicture} source={{uri: user.picture}} />
            <Text style={styles.userName}>Bonjour {user.firstName}</Text>
          </>
        )}
      </View>
      <Icon style={styles.searchIcon} name="search-outline" size={22} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginVertical: 32,
  },
  welcomeUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPicture: {
    borderRadius: 19,
    width: 38,
    height: 38,
    marginRight: 8,
  },
  userName: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: '#2C1810',
  },
  searchIcon: {
    color: '#2C1810',
  },
})
