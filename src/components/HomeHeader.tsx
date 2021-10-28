import React, {useEffect, useState} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

import {User, UserService} from '../api'
import {MyTheme} from '../theme'

export const HomeHeader: React.FC<{}> = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    setUser(UserService.getCurrentUser())
  }, [])

  return (
    <View style={styles.welcomeUser}>
      {user && (
        <>
          <Image style={styles.userPicture} source={{uri: user.picture}} />
          <Text style={[styles.userName, {color: MyTheme.colors.primaryDark}]}>
            Bonjour {user.firstName}
          </Text>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  welcomeUser: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginVertical: 32,
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
  },
})
